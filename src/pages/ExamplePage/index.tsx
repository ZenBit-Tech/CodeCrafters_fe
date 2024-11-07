import React from 'react';


import ExampleComponent from '@/components/ExampleComponent';

import useExamplePageLogic from '@/pages/ExamplePage/useExamplePage';
import useExamplePageStyles from '@/pages/ExamplePage/styles';

import { useTranslation } from 'react-i18next';

const ExamplePage = (): React.ReactElement => {
  const { t } = useTranslation();
  const { title } = useExamplePageLogic();
  const classes = useExamplePageStyles();

  return (
    <div className={classes.container}>
      <h1>{t(title)}</h1>
      <ExampleComponent />
    </div>
  );
};

export default ExamplePage;
