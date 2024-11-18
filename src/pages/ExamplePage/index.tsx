import React from 'react';

import { useTranslation } from 'react-i18next';

import ExampleComponent from '@/components/ExampleComponent';
// import useExamplePageStyles from '@/pages/ExamplePage/styles';
import useExamplePageLogic from '@/pages/ExamplePage/useExamplePage';
import AddNewAdmin from './AddNewAdmin/AddNewAdmin';
import UpdateAdmin from './UpdateAdmin/UpdateAdmin';
import DeleteAdmin from './DeleteAdmin/DeleteAdmin';
import AddNewCompany from './AddCompany/AddNewCompany';
import UpdateCompany from './UpdateCompany/UpdateCompany';

const ExamplePage = (): React.ReactElement => {
  const { t } = useTranslation();
  const { title } = useExamplePageLogic();

  return (
    <div>
      <h1>{t(title)}</h1>
      <ExampleComponent />
      <AddNewAdmin companyId={1} />
      <UpdateAdmin userId={2} />
      <DeleteAdmin adminId={2} />
      <br />
      <AddNewCompany />
      <UpdateCompany companyId={1} />
    </div>
  );
};

export default ExamplePage;
