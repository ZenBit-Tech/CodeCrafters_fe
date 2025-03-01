import { User } from './types';
type FetchUsers = () => Promise<void>;
type AddUserToList = (newUser: User) => void;
interface UseFetchUsersReturn {
    users: User[];
    totalPages: number;
    loading: boolean;
    error: Error | null;
    fetchUsers: FetchUsers;
    addUserToList: AddUserToList;
}
declare const useFetchUsers: (page: number, searchTerm: string, filterByRole: string, sortOrder: Record<string, "asc" | "desc">) => UseFetchUsersReturn;
export default useFetchUsers;
