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
  name: string;
}

const AddNewCompany = () => {
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
        `${import.meta.env.VITE_BASE_URL}/company`,
        {
          ...formData,
          logo: 'http://logo-sample',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            authorization: authToken,
          },
        }
      );

      toast('Company created successfully', { type: 'success' });

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
        btnContent={'+ Add new company'}
        formTitle={'Add new company'}
      >
        <form onSubmit={handleSubmit(sendData)}>
          <TextInput
            className="input"
            label="Organization name"
            sx={input}
            inputProps={{
              ...register('name', {
                required: "company name can't be empty",
              }),
            }}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextInput
            className="input"
            label="Email"
            sx={input}
            inputProps={{
              ...register('email', {
                required: "company email can't be empty",
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

export default AddNewCompany;
