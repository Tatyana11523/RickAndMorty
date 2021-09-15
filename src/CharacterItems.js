import React from "react";
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';


export const CharacterItems = (props) => {

  function titlePrint(name, species, status) {
    return <div><div>name: {name}</div><div>species: {species}</div><div>status: {status}</div></div>;
  }

  let listItems = props.characters.map((number) => <div key={number.id} className={'characters-list__item'}><Tooltip title={titlePrint(number.name, number.species, number.status)} arrow><Button><img src={number.image} alt={number.name} /></Button></Tooltip></div>);

  return (
    <div className={'characters-list'}>{listItems}</div>
  );
}