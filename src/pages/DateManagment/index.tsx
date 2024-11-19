import CreateRouteButtons from '@/pages/components/CreateRouteBtns/index';
import DateManager from './Calendar';
import CreateRouteProgressBar from '../components/CreateRouteProgressBar';

export default function DateManagementPage() {
  return (
    <>
      <CreateRouteProgressBar />
      <DateManager />
      <CreateRouteButtons />
    </>
  );
}
