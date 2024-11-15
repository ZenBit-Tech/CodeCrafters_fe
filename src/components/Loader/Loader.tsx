import { RootState } from '@/store/store';
import './styles.css';
import { useSelector } from 'react-redux';

const Loader = () => {
  const isVisible = useSelector((store: RootState) => store.loader.isVisible);
  return (
    <>
      {isVisible && (
        <div className="container">
          <span className="loader"></span>
        </div>
      )}
    </>
  );
};

export default Loader;
