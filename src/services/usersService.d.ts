interface ApiUser {
    id: number;
    full_name: string;
    email: string;
    phone_number: string | null;
    role: string;
}
interface GetUsersResponse {
    users: ApiUser[];
    page: number;
    pageSize: number;
    totalPages: number;
    totalUsers: number;
}
export declare const getUsers: (page?: number, pageSize?: number, searchTerm?: string, filterBy?: string, sortBy?: string, sortOrder?: string) => Promise<GetUsersResponse>;
export declare const deleteUser: (userId: number) => Promise<void>;
export {};
