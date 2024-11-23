import { useEffect, useCallback, useState } from 'react';

import { getCompanyById } from '@/api/adminActions';
import { Company } from '@/interfaces/AdminList';

const useAdminSideBar = (
  companyId: number
): {
  company: Company | undefined;
  refreshCompanyInfo: () => Promise<void>;
} => {
  const [company, setCompany] = useState<Company>();

  const refreshCompanyInfo = useCallback(async () => {
    const companyInfo = await getCompanyById(companyId);
    setCompany(companyInfo);
  }, [companyId]);

  useEffect(() => {
    refreshCompanyInfo();
  }, [refreshCompanyInfo]);

  return { company, refreshCompanyInfo };
};

export default useAdminSideBar;
