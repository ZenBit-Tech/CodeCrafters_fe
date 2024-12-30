import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { RootState } from '@/store/store';
import { Roles } from '@/constants/roles';

const RedirectBasedOnRole: FC = () => {
  const { role } = useSelector((state: RootState) => state.auth);

  if (role === Roles.SUPERADMIN) {
    return <Navigate to="/company-list" />;
  }
  if (role === Roles.ADMIN || role === Roles.DISPATCHER) {
    return <Navigate to="/orders" />;
  }
  return <Navigate to="/sign-in" />;
};

export default RedirectBasedOnRole;
