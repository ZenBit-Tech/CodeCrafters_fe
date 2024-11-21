import React, { useState } from 'react';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import editIcon from '@/assets/edit.png';

import Button from '@/components/Button';
import ModalForm from '@/components/ModalForm';
import TextInput from '@/components/TextInput';
import { RootState } from '@/store/store';
import axiosInstance from '@/utils/axiosInstance';

import { input } from './styles';
import './styles.css';

interface CompanyFormProps {
  mode: 'create' | 'update';
  fetchCompanies: () => void;
  companyId?: number;
  companyData?: { name: string; email: string };
}

interface CompanyFormInputs {
  email: string;
  name: string;
}

const CompanyForm: React.FC<CompanyFormProps> = ({
  mode,
  fetchCompanies,
  companyId,
  companyData,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CompanyFormInputs>({
    defaultValues:
      mode === 'update'
        ? { name: companyData?.name || '', email: companyData?.email || '' }
        : { name: '', email: '' },
  });

  const authToken = useSelector((store: RootState) => store.auth.token);

  const sendData = async (formData: CompanyFormInputs) => {
    try {
      const url = mode === 'update' ? `/company/${companyId}` : '/company';
      const method = mode === 'update' ? 'patch' : 'post';

      await axiosInstance[method](
        url,
        {
          ...formData,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            authorization: authToken,
          },
        }
      );

      const successMessage =
        mode === 'update'
          ? t('company.updateSuccessMessage')
          : t('company.successMessage');
      toast(successMessage, { type: 'success' });

      fetchCompanies();
      reset();
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage =
          mode === 'update'
            ? t('company.updateError')
            : t(`company.error ${error.response?.data.message}`);
        toast(errorMessage, { type: 'error' });
      }
    }
  };

  return (
    <ModalForm
      isOpenBtn={mode === 'create'}
      btnContent={mode === 'create' ? t('button.addNewCompany') : editIcon}
      formTitle={
        mode === 'update'
          ? t('modal.updateCompanyTitle')
          : t('modal.addCompanyTitle')
      }
      isOpened={isModalOpen}
      setIsOpened={setIsModalOpen}
    >
      <form onSubmit={handleSubmit(sendData)}>
        <TextInput
          className="input"
          label={t('form.organizationName')}
          sx={input}
          focused={mode === 'update'}
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
          focused={mode === 'update'}
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
            label={mode === 'update' ? t('button.update') : t('button.add')}
            variant="colored"
          />
          <Button
            label={t('button.cancel')}
            variant="grey"
            onClick={() => reset()}
          />
        </div>
      </form>
    </ModalForm>
  );
};

export default CompanyForm;
