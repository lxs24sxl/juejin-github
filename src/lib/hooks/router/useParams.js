// import { useRouter } from './useRouter';
import useRouter from './useRouter';
const useParams = () => {
  const { match } =  useRouter();
  return match.params;
}

export default useParams;