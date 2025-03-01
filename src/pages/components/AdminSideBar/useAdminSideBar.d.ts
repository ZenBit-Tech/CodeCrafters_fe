import { Company } from '@/interfaces/AdminList';
declare const useAdminSideBar: (companyId: number) => {
    company: Company | undefined;
    refreshCompanyInfo: () => Promise<void>;
};
export default useAdminSideBar;
