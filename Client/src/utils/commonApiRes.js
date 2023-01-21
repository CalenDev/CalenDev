import { openModal } from '../features/GlobalModal/GlobalModalSlice';
import { logoutUser } from '../features/User/UserSlice';

async function commonFailRes(dispatch, persistor, navigate, code) {
  switch (code) {
    case 'E400AB':
    case 'E400AD':
    case 'E401AC': // logout
      await persistor.purge();
      sessionStorage.removeItem('accessToken');
      dispatch(logoutUser());
      dispatch(openModal({ modalCode: 3 }));
      navigate('/signin', { replace: true });
      break;
    default:
      break;
  }
}

async function commonErrorRes(navigate, code) {
  switch (code) {
    case 'E500AA':
      navigate('/error', {
        replace: true,
        errorTitle: '네트워크 에러가 발생했습니다!',
      });
      break;
    default:
      break;
  }
}

export { commonFailRes, commonErrorRes };