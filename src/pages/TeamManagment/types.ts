export interface User {
  id: string;
  role: string;
  firstName: string;
  lastName?: string;
  email: string;
  phoneNumber: string;
}

export interface ApiUser {
  id: string;
  role: string;
  full_name: string;
  phone_number: string | null;
  email: string;
}

export interface DecodedToken {
  company_id: {
    id: number;
  };
  [key: string]: unknown;
}

export interface UserFormProps {
  mode: 'create' | 'update';
  fetchUsers: () => void;
  userId?: number;
  userData?: {
    fullName: string;
    email: string;
    phoneNumber: string;
    role: string;
  };
  addUserToList: (user: User) => void;
}

export interface UserFormInputs {
  fullName: string;
  email: string;
  phoneNumber: string;
  role?: string;
}
