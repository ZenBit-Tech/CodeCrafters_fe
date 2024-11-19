import './styles.css';

import { AxiosError } from 'axios';
import { t } from 'i18next';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import Button from '@/components/Button';
import ModalForm from '@/components/ModalForm';
import TextInput from '@/components/TextInput';
import { RootState } from '@/store/store';
import axiosInstance from '@/utils/axiosInstance';
import EditIcon from '@mui/icons-material/Edit';

import { input } from './styles';

interface UpdateCompanyForm {
  email: string;
  name: string;
}

const UpdateCompany = ({
  companyId,
  companyData,
  fetchCompanies,
}: {
  companyId: number;
  companyData: { name: string; email: string };
  fetchCompanies: () => void;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateCompanyForm>({
    defaultValues: {
      name: companyData?.name || '',
      email: companyData?.email || '',
    },
  });

  const authToken = useSelector((store: RootState) => store.auth.token);

  const sendData = async (formData: UpdateCompanyForm) => {
    try {
      await axiosInstance.patch(
        `/company/${companyId}`,
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

      toast(t('company.updateSuccessMessage'), { type: 'success' });
      fetchCompanies();
      reset();
    } catch (error) {
      if (error instanceof AxiosError) {
        toast(t('company.updateError'), {
          type: 'error',
        });
      }
    }
  };

  return (
    <ModalForm
      isOpenBtn={false}
      btnContent={EditIcon}
      formTitle={t('modal.updateCompanyTitle')}
    >
      <form onSubmit={handleSubmit(sendData)}>
        <TextInput
          className="input"
          label={t('form.organizationName')}
          sx={input}
          focused
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
          focused
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
            label={t('button.update')}
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

export default UpdateCompany;
