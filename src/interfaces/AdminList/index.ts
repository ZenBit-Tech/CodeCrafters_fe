export interface Admins {
  id: number;
  logo: string;
  full_name: string;
  email: string;
  role: string;
  company_id: {
    id: number;
    name: string;
    logo: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Company {
  id: number;
  name: string;
  client_name: string;
  logo: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface AdminForm {
  email: string;
  full_name: string;
}

export interface Admin {
  id: number;
  full_name: string;
  email: string;
}

export interface PaginatedAdmin extends Admin {
  firstName: string;
  lastName: string;
}

export interface AdminListTableProps {
  paginatedAdmins: PaginatedAdmin[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  itemsPerPage: number;
  setItemsPerPage: (count: number) => void;
  page: number;
  setPage: (page: number) => void;
  pageCount: number;
  startIndex: number;
  endIndex: number;
  companyId: number;
  refreshAdmins: () => Promise<void>;
  filteredAdmins: Admin[];
}

export interface UseAdminListReturnType {
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
  filteredAdmins: Admin[];
  refreshAdmins: () => Promise<void>;
}
