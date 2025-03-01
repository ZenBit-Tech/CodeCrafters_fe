import React, { FC } from 'react';
declare const ModalForm: FC<{
    isOpenBtn: boolean;
    btnContent: string;
    children: React.ReactNode;
    formTitle: string;
    isOpened: boolean;
    setIsOpened: (open: boolean) => void;
}>;
export default ModalForm;
