import './styles.css';

import { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import editIcon from '@/assets/edit.png';
import Button from '@/components/Button';
import ModalForm from '@/components/ModalForm';
import TextInput from '@/components/TextInput';
import { Company } from '@/interfaces/AdminList';
import { RootState, store } from '@/store/store';
import axiosInstance from '@/utils/axiosInstance';

import { input } from './styles';
import { setisVisible } from '@/store/slices/loaderSlice';

interface CompanyFormProps {
  mode: 'create' | 'update';
  fetchCompanies: () => void;
  addCompanyToList?: (newCompany: Company) => void;
  companyId?: number;
  companyData?: {
    name: string;
    email: string;
    client_name?: string;
  };
  isIconButton?: boolean;
  showAsButton?: boolean;
}

interface CompanyFormInputs {
  email: string;
  name: string;
  client_name?: string;
}

const CompanyForm: React.FC<CompanyFormProps> = ({
  mode,
  fetchCompanies,
  addCompanyToList,
  companyId,
  companyData,
  isIconButton,
  showAsButton,
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
        ? {
            name: companyData?.name || '',
            client_name: companyData?.client_name || '',
            email: companyData?.email || '',
          }
        : { name: '', email: '' },
  });

  useEffect(() => {
    if (companyData) {
      reset({
        name: companyData.name || '',
        client_name: companyData.client_name || '',
        email: companyData.email || '',
      });
    }
  }, [companyData, reset]);

  const btnContent = (() => {
    if (mode === 'create') {
      return t('button.addNewCompany');
    }
    if (isIconButton) {
      return editIcon;
    }
    return t('adminList.editButton');
  })();

  const authToken = useSelector((store: RootState) => store.auth.token);

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const sendData = async (formData: CompanyFormInputs) => {
    try {
      store.dispatch(setisVisible(true));
      const url = mode === 'update' ? `/company/${companyId}` : '/company';
      const method = mode === 'update' ? 'patch' : 'post';

      const response = await axiosInstance[method](
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

      if (mode === 'create') {
        if (addCompanyToList) {
          addCompanyToList(response.data);
        }
      } else {
        fetchCompanies();
      }

      closeModal();
      reset();
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage =
          mode === 'update'
            ? t('company.updateError')
            : t(`company.error ${error.response?.data.message}`);
        toast(errorMessage, { type: 'error' });
      }
    } finally {
      store.dispatch(setisVisible(false));
    }
  };

  return (
    <ModalForm
      isOpenBtn={showAsButton ?? mode === 'create'}
      btnContent={btnContent}
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
          label={t('form.clientName')}
          sx={input}
          focused={mode === 'update'}
          inputProps={{
            ...register('client_name', {
              required: t('form.validation.clientNameRequired'),
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
