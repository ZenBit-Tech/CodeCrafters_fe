import { t } from 'i18next';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { getCompanies } from '@/services/companyService';

interface Company {
  id: number;
  name: string;
  email: string;
}

const useCompanies = (
  page: number,
  pageSize: number,
  searchTerm: string,
  sortOrder: string
) => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [total, setTotal] = useState(0);

  const fetchCompanies = useCallback(async (): Promise<void> => {
    try {
      const { data, total } = await getCompanies(
        page,
        pageSize,
        searchTerm,
        'name',
        sortOrder.toUpperCase()
      );
      setCompanies(data);
      setTotal(total);
    } catch (error) {
      console.error('Failed to fetch companies:', error);
      toast.error(t('company.fetchErorr'), { toastId: 'fetch-error' });
    }
  }, [page, pageSize, searchTerm, sortOrder]);

  useEffect(() => {
    fetchCompanies();
  }, [fetchCompanies]);

  return { companies, total };
};
export default useCompanies;
