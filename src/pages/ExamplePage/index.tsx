import ExampleComponent from '@/components/ExampleComponent';
import TextInput from '@/components/TextInput';
import useExamplePageStyles from '@/pages/ExamplePage/styles';
import useExamplePageLogic from '@/pages/ExamplePage/useExamplePage';
import React from 'react';
import { useTranslation } from 'react-i18next';

const ExamplePage = (): React.ReactElement => {
  const { t } = useTranslation();
  const { title } = useExamplePageLogic();
  const classes = useExamplePageStyles();

  return (
    <div className={classes.container}>
      <h1>{t(title)}</h1>
      <ExampleComponent />
      <TextInput label="Email" />
    </div>
  );
};

export default ExamplePage;
