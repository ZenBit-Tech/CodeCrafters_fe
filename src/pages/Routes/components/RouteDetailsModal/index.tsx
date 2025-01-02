import React from 'react';
import { Modal } from '@mui/material';
import { t } from 'i18next';

import { NotificationsData } from '@/interfaces/Routes';
import { calculateRouteTime } from '@/utils/calculateRouteTime';
import Status from '@/components/Status';

import {
  ModalContainer,
  NotificationBox,
  NotificationTitle,
  NotificationTime,
  NoteTitle,
  NoteContent,
  OrderDescription,
  ButtonBox,
} from './styles';
import Button from '@/components/Button';

interface RouteDetailsModalProps {
  open: boolean;
  onClose: () => void;
  data: NotificationsData[];
}

const RouteDetailsModal: React.FC<RouteDetailsModalProps> = ({
  open,
  onClose,
  data,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalContainer>
        {data.length > 0 && (
          <>
            <NotificationTitle variant="h1">
              {t('routesPage.modal.notificationsFrom', {
                name: data[0].user.full_name,
              })}
            </NotificationTitle>
            {data.map((item) => (
              <NotificationBox key={item.id}>
                <OrderDescription variant="body2">
                  {item.collection_address}
                  <NotificationTime>
                    {`, ${calculateRouteTime(item.collection_time_start, item.collection_time_end)}`}
                  </NotificationTime>
                </OrderDescription>

                <Status status={item.status} />

                <NoteTitle variant="body1">
                  {t('routesPage.modal.noteFromDriver')}
                </NoteTitle>
                <NoteContent>{item.failed_reason}</NoteContent>
              </NotificationBox>
            ))}
            <ButtonBox>
              <Button label={t('Cancel')} onClick={onClose} variant="colored" />
            </ButtonBox>
          </>
        )}
      </ModalContainer>
    </Modal>
  );
};

export default RouteDetailsModal;
