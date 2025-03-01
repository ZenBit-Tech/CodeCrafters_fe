import React from 'react';
import { User } from '@/pages/TeamManagment/types';
interface UserItemProps {
    user: {
        id: number;
        fullName: string;
        email: string;
        phoneNumber: string;
        role: string;
    };
    fetchUsers: () => void;
    addUserToList: (user: User) => void;
}
declare const UserRow: React.FC<UserItemProps>;
export default UserRow;
