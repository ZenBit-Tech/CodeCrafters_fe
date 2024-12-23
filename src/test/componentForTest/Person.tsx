import { FC } from 'react';

import './Person.css';
import asd from './logo-one.svg';

interface Props {
  firstName: string;
  lastName: string;
}
const Person: FC<Props> = ({ firstName, lastName }) => (
  <p className="Person">
    {' '}
    <img src={asd} alt="asd" /> <br /> First Name : {firstName} , Last Name :{' '}
    {lastName}
  </p>
);

export default Person;
