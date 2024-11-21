import Button from '@/components/Button';
import { useState } from 'react';
import './styles.css';
import { useForm } from 'react-hook-form';
import TextInput from '@/components/TextInput';
import axios, { AxiosError } from 'axios';
import { useSelector } from 'react-redux';
import { input } from './styles';
import { toast } from 'react-toastify';
import edit from '@/assets/edit.png';
import ModalForm from '@/components/ModalForm';
import { RootState } from '@/store/store';

interface UpdateCompanyForm {
  email: string;
  name: string;
}

const UpdateCompany = ({ companyId }: { companyId: number }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateCompanyForm>();

  const authToken = useSelector((store: RootState) => store.auth.token);

  const sendData = async (formData: UpdateCompanyForm) => {
    try {
      await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/company/${companyId}`,
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

      toast('Company updated successfully', { type: 'success' });

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
        isOpenBtn={false}
        btnContent={edit}
        formTitle={'Update company'}
      >
        <form onSubmit={handleSubmit(sendData)}>
          <TextInput
            className="input"
            label="Organization name"
            sx={input}
            focused
            inputProps={{
              ...register('name', {
                required: "company name can't be empty",
                value: 'company current name',
              }),
            }}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextInput
            className="input"
            label="Email"
            sx={input}
            placeholder="asd@gmail.com"
            focused
            inputProps={{
              ...register('email', {
                required: "company email can't be empty",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'String should be email',
                },
                value: 'currentemail@gmail.com',
              }),
            }}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <div>
            <Button
              className="addBtn"
              type="submit"
              label="Update"
              variant="colored"
            />
            <Button label="Cancel" variant="grey" onClick={() => reset()} />
          </div>
        </form>
      </ModalForm>
    </>
  );
};

export default UpdateCompany;
