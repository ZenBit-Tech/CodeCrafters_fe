import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '@/store/store';
import { UseSignInReturnType } from '@/interfaces/SignIn';
declare const useSignIn: (navigate: ReturnType<typeof useNavigate>, dispatch: AppDispatch) => UseSignInReturnType;
export default useSignIn;
