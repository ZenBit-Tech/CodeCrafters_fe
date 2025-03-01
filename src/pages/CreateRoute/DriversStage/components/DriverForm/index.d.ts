import React from 'react';
declare const DriverForm: ({ isEditing, initialValues, onSubmit, formTitle, buttonContent, refreshDrivers, }: {
    isEditing?: boolean;
    initialValues?: {
        full_name: string;
        email: string;
        phone_number: string;
    };
    onSubmit: (data: {
        full_name: string;
        email: string;
        phone_number: string;
    }) => Promise<void>;
    formTitle: string;
    buttonContent: string;
    refreshDrivers: () => Promise<void>;
}) => React.JSX.Element;
export default DriverForm;
