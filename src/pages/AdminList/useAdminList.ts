import { useState, useEffect, useCallback } from 'react';

import { getAdminList } from '@/api/adminActions';
import { Admin, UseAdminListReturnType } from '@/interfaces/AdminList';

const useAdminList = (companyId: number): UseAdminListReturnType => {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const refreshAdmins = useCallback(async () => {
    const adminList = await getAdminList(companyId);
    setAdmins(
      adminList.map((admin: Admin) => ({
        id: admin.id,
        full_name: admin.full_name,
        email: admin.email,
      }))
    );
  }, [companyId]);

  useEffect(() => {
    refreshAdmins();
  }, [refreshAdmins]);

  const filteredAdmins = admins.filter(
    (admin) =>
      admin.full_name &&
      admin.full_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredAdmins.length);

  const paginatedAdmins = filteredAdmins
    .slice(startIndex, endIndex)
    .map((admin) => {
      const [firstName, ...lastNameParts] = admin.full_name.split(' ');
      const lastName = lastNameParts.join(' ');
      return { ...admin, firstName, lastName };
    });

  const pageCount = Math.ceil(filteredAdmins.length / itemsPerPage);

  useEffect(() => {
    if (page > pageCount) {
      setPage(pageCount || 1);
    }
  }, [filteredAdmins.length, page, pageCount]);

  return {
    admins,
    searchQuery,
    setSearchQuery,
    page,
    setPage,
    itemsPerPage,
    setItemsPerPage,
    paginatedAdmins,
    pageCount,
    startIndex,
    endIndex,
    filteredAdmins,
    refreshAdmins,
  };
};

export default useAdminList;
