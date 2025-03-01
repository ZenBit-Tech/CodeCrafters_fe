interface UseDeleteRoute {
    handleDelete: () => Promise<void>;
    handlePreviousPage: () => void;
}
export declare const useDeleteRoute: () => UseDeleteRoute;
export {};
