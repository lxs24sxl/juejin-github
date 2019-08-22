import useRouter from './useRouter';
import querystring from 'query-string';

const useQuery = () => {
  const { location } = useRouter();

  return querystring.parse(location.search)
}

export default useQuery;