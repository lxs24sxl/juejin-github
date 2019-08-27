import types from './action_types';

function updateRecord(id, data) {
  return dispatch => {
    dispatch({
      type: types.RECORD_UPDATE,
      data: {
        id,
        data,
      },
    });
  };
}

function updateSort (sort) {
  return dispatch => {
    dispatch({
      type: types.SORT_UPDATE,
      sort
    })
  }
}

export default {
  updateRecord,
  updateSort
};
