import React from 'react';
interface CompanyItemProps {
    company: {
        id: number;
        name: string;
        email: string;
    };
    fetchCompanies: () => void;
    onNavigate: (id: number) => void;
}
declare const CompanyItem: React.FC<CompanyItemProps>;
export default CompanyItem;
