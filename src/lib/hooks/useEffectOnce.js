import {
  // EffeactCallback,
  useEffect
} from 'react';

const useEFfectOnce = (effect) => {
  useEffect(effect, []);
};

export default useEFfectOnce;