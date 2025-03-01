import React from 'react';
declare const DeleteAdmin: ({ adminId, refreshAdmins, }: {
    adminId: number;
    refreshAdmins: () => Promise<void>;
}) => React.JSX.Element;
export default DeleteAdmin;
