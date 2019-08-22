// import { useRouter } from './useRouter';
import useRouter from './useRouter';
const useLocation = () => {
  const { location, history } = useRouter();

  function navigate (to, { replace = false }) {
    if (replace) {
      history.replace(to);
    } else {
      history.push(to);
    }
  }

  return {
    navigate,
    location
  }
}

export default useLocation;