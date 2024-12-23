import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import Person from './Person';

// eslint-disable-next-line no-undef
test('Renders Person component correctly', async () => {
  const { getByText } = render(
    <Person firstName="Nathan" lastName="Krasney" />
  );

  // eslint-disable-next-line no-undef
  expect(document.getElementsByTagName('p').length).toBe(1);

  const htmlElement = getByText('First Name : Nathan , Last Name : Krasney');

  // eslint-disable-next-line no-undef
  expect(htmlElement).not.toBeFalsy();
  // eslint-disable-next-line no-undef
  expect(htmlElement).toBeInTheDocument();
});
