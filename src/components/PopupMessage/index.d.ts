import React from 'react';
interface PopupMessageProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    heading: string;
    mainMessage: string;
    subMessage: string;
    cancelText?: string;
    confirmText?: string;
}
declare const PopupMessage: React.FC<PopupMessageProps>;
export default PopupMessage;
