import './styles.css';

import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import Button from '@/components/Button';
import ModalForm from '@/components/ModalForm';
import TextInput from '@/components/TextInput';
import { RootState } from '@/store/store';
import axiosInstance from '@/utils/axiosInstance';

import { input } from './styles';

interface CreateCompanyForm {
  email: string;
  name: string;
}

const AddNewCompany = ({ fetchCompanies }: { fetchCompanies: () => void }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateCompanyForm>();

  const authToken = useSelector((store: RootState) => store.auth.token);

  const sendData = async (formData: CreateCompanyForm) => {
    try {
      await axiosInstance.post(
        '/company',
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

      toast(t('company.successMessage'), { type: 'success' });
      fetchCompanies();
      reset();
    } catch (error) {
      if (error instanceof AxiosError) {
        toast(t(`company.error ${error.response?.data.message}`), {
          type: 'error',
        });
      }
    }
  };

  return (
    <ModalForm
      isOpenBtn={true}
      btnContent={t('button.addNewCompany')}
      formTitle={t('modal.addCompanyTitle')}
    >
      <form onSubmit={handleSubmit(sendData)}>
        <TextInput
          className="input"
          label={t('form.organizationName')}
          sx={input}
          inputProps={{
            ...register('name', {
              required: t('form.validation.companyNameRequired'),
            }),
          }}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextInput
          className="input"
          label={t('form.email')}
          sx={input}
          inputProps={{
            ...register('email', {
              required: t('form.validation.emailRequired'),
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: t('form.validation.invalidEmail'),
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
            label={t('button.add')}
            variant="colored"
          />
          <Button
            label={t('button.cancel')}
            variant="grey"
            onClick={() => {
              reset();
            }}
          />
        </div>
      </form>
    </ModalForm>
  );
};

export default AddNewCompany;
