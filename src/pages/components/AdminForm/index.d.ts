import React from 'react';
declare const AdminForm: ({ isEditing, initialValues, onSubmit, formTitle, buttonContent, refreshAdmins, }: {
    isEditing?: boolean;
    initialValues?: {
        full_name: string;
        email: string;
    };
    onSubmit: (data: {
        full_name: string;
        email: string;
    }) => Promise<void>;
    formTitle: string;
    buttonContent: string;
    refreshAdmins: () => Promise<void>;
}) => React.JSX.Element;
export default AdminForm;
