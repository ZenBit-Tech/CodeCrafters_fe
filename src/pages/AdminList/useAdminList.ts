import { useState, useEffect } from 'react';

interface Admin {
  id: number;
  name: string;
  email: string;
}

interface PaginatedAdmin extends Admin {
  firstName: string;
  lastName: string;
}

interface UseAdminListReturnType {
  admins: Admin[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  page: number;
  setPage: (page: number) => void;
  itemsPerPage: number;
  setItemsPerPage: (count: number) => void;
  paginatedAdmins: PaginatedAdmin[];
  pageCount: number;
  startIndex: number;
  endIndex: number;
}

const useAdminList = (): UseAdminListReturnType => {
  const [admins] = useState<Admin[]>(
    Array.from({ length: 50 }, (_, index) => ({
      id: index,
      name: `Shamus Tuttle${index + 1}`,
      email: `Nicklaus.Balistreri${index + 1}@hotmail.com`,
    }))
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const filteredAdmins = admins.filter((admin) =>
    admin.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedAdmins = filteredAdmins
    .slice(startIndex, endIndex)
    .map((admin) => {
      const [firstName, ...lastNameParts] = admin.name.split(' ');
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
  };
};

export default useAdminList;
