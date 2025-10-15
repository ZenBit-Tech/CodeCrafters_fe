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

interface UpdateAdminForm {
  email: string;
  full_name: string;
}

const UpdateAdmin = ({ userId }: { userId: number }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateAdminForm>();

  const authToken = useSelector((store: RootState) => store.auth.token);

  const sendData = async (formData: UpdateAdminForm) => {
    try {
      await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/admins/${userId}`,
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

      toast('Admin updated successfully', { type: 'success' });

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
      <ModalForm isOpenBtn={false} btnContent={edit} formTitle={'Update admin'}>
        <form onSubmit={handleSubmit(sendData)}>
          <TextInput
            className="input"
            label="Admin full name"
            sx={input}
            focused
            inputProps={{
              ...register('full_name', {
                required: "admin name can't be empty",
                value: 'Admin Name',
              }),
            }}
            error={!!errors.full_name}
            helperText={errors.full_name?.message}
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
                value: 'currentemail@gmail.com',
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
              label="Update"
              variant="colored"
            />
            <Button label="Cancel" variant="grey" onClick={() => reset()} />
          </div>
        </form>
      </ModalForm>
      {/* <img
        src={edit}
        style={{ cursor: 'pointer' }}
        alt="edit"
        onClick={() => setIsOpened(!isOpened)}
      /> */}
      {isOpened && <div className="wrapper"></div>}
    </>
  );
};

export default UpdateAdmin;
