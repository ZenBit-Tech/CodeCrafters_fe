import React from 'react';
import { NotificationsData } from '@/interfaces/Routes';
interface RouteDetailsModalProps {
    open: boolean;
    onClose: () => void;
    data: NotificationsData[];
}
declare const RouteDetailsModal: React.FC<RouteDetailsModalProps>;
export default RouteDetailsModal;
