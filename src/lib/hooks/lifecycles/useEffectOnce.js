import {
  // EffeactCallback,
  useEffect
} from 'react';

const useEffectOnce = (effect) => {
  useEffect(effect, []);
};

export default useEffectOnce;