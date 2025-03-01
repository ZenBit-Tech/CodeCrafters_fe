export interface Company {
    id: number;
    name: string;
    email: string;
}
declare const useCompanies: (page: number, pageSize: number, searchTerm: string, sortOrder: string) => {
    companies: Company[];
    total: number;
    fetchCompanies: () => Promise<void>;
    addCompanyToList: (newCompany: Company) => void;
};
export default useCompanies;
