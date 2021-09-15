import React, {useEffect} from 'react';
import { CharacterItems } from './CharacterItems';
import {InputFiler} from './InputFilter';
import {PaginationControlled} from "./PaginationControlled";
import {useDispatch, useSelector} from 'react-redux';
import {searchGet} from './redux/thunk';

export const RickMorty = () => {

  const dispatch = useDispatch();

  const page = useSelector(state => state.pageNumber.page);

  const search = useSelector(state => state.searchString.value);

    useEffect(() => {
      if (search.length >= 2 || search.length === 0) {
        dispatch(searchGet(search, page));
      }
    }, [search, page]);

  const characters = useSelector(state => state.search.pageStatus);

  let pageInfo = 1;
  let itemsList = [];

  if (characters.info) {
    pageInfo = characters.info.pages;
  }

  if (characters.results) {
    itemsList = characters.results;
  }

  return (
      <div className={'characters'}>
        <InputFiler />
        <CharacterItems characters={itemsList} />
        <PaginationControlled pages={pageInfo} />
      </div>
  );
}