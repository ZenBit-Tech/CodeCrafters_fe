import React from 'react';
interface UseHandleKeyDown {
    handleKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}
export declare const useHandleKeyDown: (onSearch: (search: string) => void) => UseHandleKeyDown;
export {};
