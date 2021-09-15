import React, {useMemo} from "react";
import TextField from '@material-ui/core/TextField';
import {useDispatch} from "react-redux";
import {searchStringValue} from "./redux/action";
import debounce from "lodash.debounce";

export const InputFiler = () => {

  const dispatch = useDispatch();

  function searchItems(event) {
    dispatch(searchStringValue(event.target.value));
  }

  const debouncedChangeHandler = useMemo(() => {
    return debounce(searchItems, 500);
  }, []);

  return (
    <div className={'search-input'}>
      <TextField id="standard-search" label="Search..." type="search" onInput={debouncedChangeHandler} />
    </div>
  );
}

