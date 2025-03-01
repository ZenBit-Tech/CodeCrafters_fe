type UseTokenExpiredModalReturn = {
    isModalOpen: boolean;
    handleResendEmail: () => Promise<void>;
    handleCloseModal: () => void;
};
declare const useTokenExpiredModal: () => UseTokenExpiredModalReturn;
export default useTokenExpiredModal;
