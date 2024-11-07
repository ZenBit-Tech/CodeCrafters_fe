import { useState, useEffect } from 'react';

interface Admin {
  id: number;
  name: string;
  email: string;
}

interface UseAdminListReturnType {
  admins: Admin[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  page: number;
  setPage: (page: number) => void;
  itemsPerPage: number;
  setItemsPerPage: (count: number) => void;
  paginatedAdmins: Admin[];
  pageCount: number;
  startIndex: number;
  endIndex: number;
  getInitials: (name: string) => string;
}

const useAdminList = (): UseAdminListReturnType => {
  const [admins] = useState<Admin[]>(
    Array.from({ length: 50 }, (_, index) => ({
      id: index,
      name: `Shamus Tuttle ${index + 1}`,
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
  const paginatedAdmins = filteredAdmins.slice(startIndex, endIndex);
  const pageCount = Math.ceil(filteredAdmins.length / itemsPerPage);

  const getInitials = (name: string): string => {
    const nameParts = name.split(' ');
    const initials =
      nameParts.length >= 2
        ? `${nameParts[0][0]}${nameParts[1][0]}`
        : nameParts[0][0];
    return initials.toUpperCase();
  };

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
    getInitials,
  };
};

export default useAdminList;
