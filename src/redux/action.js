export const SEARCH_FETCH = 'SEARCH_FETCH';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_ERROR = 'SEARCH_ERROR';

export const GET_PAGE_FETCH = 'GET_PAGE_FETCH';
export const GET_PAGE_SUCCESS = 'GET_PAGE_SUCCESS';
export const GET_PAGE_ERROR = 'GET_PAGE_ERROR';

export const PAGE_NUMBER = 'PAGE_NUMBER';

export const SEARCH_STRING = 'SEARCH_STRING';

export const savePageNumber = (page) => (
  {
    type: PAGE_NUMBER,
    payload: page
  }
);

export const searchStringValue = (value) => (
  {
    type: SEARCH_STRING,
    payload: value
  }
);

export const getPageFetch = () => (
  {
    type: GET_PAGE_FETCH
  }
);

export const getPageSuccess = (pageItems) => (
  {
    type: GET_PAGE_SUCCESS,
    payload: pageItems
  }
);

export const getPageError = (error) => (
  {
    type: GET_PAGE_ERROR,
    payload: error
  }
);

export const searchFetch = () => (
  {
    type: SEARCH_FETCH
  }
);
export const searchSuccess = (SearchItems) => (
  {
    type: SEARCH_SUCCESS,
    payload: SearchItems
  }
);
export const searchError = (error) => (
  {
    type: SEARCH_ERROR,
    payload: error
  }
);
