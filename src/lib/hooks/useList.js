import { useState } from 'react';

const useList = (initialList: []) => {
  const [list, set] = useState(initialList);

  return [
    list,
    {
      set,
      clear: () => set([]),
      updateAt: (index, entry) => set(currentList => [...currentList.slice(0, index), entry, ...list.slice(index + 1)]),
      push: entry => set(currentList => [...currentList, entry]),
      unshift: entry => set(currentList => [entry, ...currentList])
    }
  ]
}


export default useList;