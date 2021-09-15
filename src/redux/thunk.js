import {
  searchFetch,
  searchSuccess,
  searchError
} from './action';

import axios from 'axios';

export const searchGet = (searchString, page) => {
  return dispatch => {
    dispatch(searchFetch());
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}&name=${searchString}`)
      .then(res => {
        dispatch(searchSuccess(res.data));
      })
      .catch(err => {
        dispatch(searchError(err));
      });
  };
};
