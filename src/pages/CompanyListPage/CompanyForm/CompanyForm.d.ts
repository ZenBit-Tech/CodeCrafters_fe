import './styles.css';
import React from 'react';
import { Company } from '@/interfaces/AdminList';
interface CompanyFormProps {
    mode: 'create' | 'update';
    fetchCompanies: () => void;
    addCompanyToList?: (newCompany: Company) => void;
    companyId?: number;
    companyData?: {
        name: string;
        email: string;
        client_name?: string;
    };
    isIconButton?: boolean;
    showAsButton?: boolean;
}
declare const CompanyForm: React.FC<CompanyFormProps>;
export default CompanyForm;
