import React from 'react';
interface ProtectedRouteProps {
    children: React.ReactNode;
    isAllowed: boolean;
}
declare const ProtectedRoute: React.FC<ProtectedRouteProps>;
export default ProtectedRoute;
