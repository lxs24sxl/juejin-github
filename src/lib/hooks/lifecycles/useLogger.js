import useEffectOnce from "./useEffectOnce";
import { useUpdateEffect } from "..";

const useLogger = (componentName, ...rest) => {
  useEffectOnce(() => {
    console.log(`${componentName} mounted`, ...rest);
    return () => console.log(`${componentName} unmounted`);
  });

  useUpdateEffect(() => {
    console.log(`${componentName} updated`, ...rest);
  });
}


export default useLogger;