import React from "react";
import TextField from '@material-ui/core/TextField';
import {useDispatch} from "react-redux";
import {searchStringValue} from "./redux/action";

export const InputFiler = () => {

  const dispatch = useDispatch();

  function searchItems(event) {
    dispatch(searchStringValue(event.target.value));
  }

  return (
    <div className={'search-input'}>
      <TextField id="standard-search" label="Search..." type="search" onInput={searchItems} />
    </div>
  );
}

