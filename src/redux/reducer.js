import {
  SEARCH_FETCH,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  PAGE_NUMBER,
  SEARCH_STRING
} from './action';

const searchState = {
  isLoading: false,
  pageStatus: [],
  error: null
};

const pageNumberState = {
  page: 1
};

export const pageNumberGet = (state = pageNumberState, action) => {
  switch (action.type) {
    case PAGE_NUMBER:
      return {
        page: action.payload
      };
    default:
      return state;
  }
};

const searchValueState = {
  value: ''
};

export const searchValueGet = (state = searchValueState, action) => {
  switch (action.type) {
    case SEARCH_STRING:
      return {
        value: action.payload
      };
    default:
      return state;
  }
};

export const searchStateGet = (state = searchState, action) => {
  switch (action.type) {
    case SEARCH_FETCH:
      return {
        ...state,
        isLoading: true
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pageStatus: action.payload
      };
    case SEARCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
