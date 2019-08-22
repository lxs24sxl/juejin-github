import { useContext } from 'react';
import { __RouterContext as RouterContext } from 'react-router';
console.log('RouterContext',useContext,  RouterContext)
const useRouter = () => {
  return useContext(RouterContext);
};

export default useRouter;


// export function useParams() {
//   const { match } = useRouter();
//   return match.params;
// }

// export function useLocation() {
//   const { location, history } = useRouter();

//   function navigate(to, { replace = false } = {}) {
//     if (replace) {
//       history.replace(to);
//     } else {
//       history.push(to);
//     }
//   }

//   return {
//     location,
//     navigate
//   };
// }