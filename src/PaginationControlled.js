import React, {useState} from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {useDispatch} from "react-redux";
import {savePageNumber} from "./redux/action";

export const PaginationControlled = (props) => {

  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    dispatch(savePageNumber(value));
  };

  return (
    <div className={'pagination-items'}>
      <Pagination count={props.pages} page={page} onChange={handleChange} color="secondary" />
    </div>
  );
}