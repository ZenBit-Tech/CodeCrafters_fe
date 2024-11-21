import Button from '@/components/Button';
import { useState } from 'react';
import './styles.css';
import { useForm } from 'react-hook-form';
import TextInput from '@/components/TextInput';
import axios, { AxiosError } from 'axios';
import { useSelector } from 'react-redux';
import { input } from './styles';
import { toast } from 'react-toastify';
import ModalForm from '@/components/ModalForm';
import { RootState } from '@/store/store';

interface CreateCompanyForm {
  email: string;
  full_name: string;
}

const AddNewAdmin = ({ companyId }: { companyId: number }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateCompanyForm>();

  const authToken = useSelector((store: RootState) => store.auth.token);

  const sendData = async (formData: CreateCompanyForm) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/admins`,
        {
          ...formData,
          logo: 'http://logo-sample',
          company_id: companyId,
          role: 'admin',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            authorization: authToken,
          },
        }
      );

      toast('Admin created successfully', { type: 'success' });

      reset();
      setIsOpened(!isOpened);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast(`${error.response?.data.message}`, { type: 'error' });
      }
    }
  };

  return (
    <>
      <ModalForm
        isOpenBtn={true}
        btnContent={'+ Add new admin'}
        formTitle={'Add new admin'}
      >
        <form onSubmit={handleSubmit(sendData)}>
          <TextInput
            className="input"
            label="Admin name"
            sx={input}
            inputProps={{
              ...register('full_name', {
                required: "admin full_name can't be empty",
              }),
            }}
            error={!!errors.full_name}
            helperText={errors.full_name?.message}
          />
          <TextInput
            className="input"
            label="Email"
            sx={input}
            inputProps={{
              ...register('email', {
                required: "admin email can't be empty",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'String should be email',
                },
              }),
            }}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <div>
            <Button
              className="addBtn"
              type="submit"
              label="Add"
              variant="colored"
            />
            <Button label="Cancel" variant="grey" onClick={() => reset()} />
          </div>
        </form>
      </ModalForm>
    </>
  );
};

export default AddNewAdmin;
