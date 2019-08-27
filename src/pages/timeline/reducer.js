import types from './action_types';

const initialState = {
  sort: 'popular',
};

export default function(state = initialState, { data, type }) {
  // console.log('reducer--', state, data, type)
  if (Object.keys(types).find(key => types[key] === type)) {
    switch (type) {
      default:
        console.log('reducer', state, data)
        return { ...state, ...data };
    }
  }
  return state || {};
};
