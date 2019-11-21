import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Select } from '@material-ui/core';

const style = makeStyles(theme => ({
   
  textField: {
    width: '90%',
    },
  })
);

const Search_bar = () => {
 
 
  return (
    <div id ="SearchContainer">

    <TextField
    id="search"
    label="Enter a search"
    variant="outlined"
    />
    
    <Select
    labelId="enter_text"
    id="searchDrpdwn"
   
    
  >
    <option value={'movies'}>Movie</option>
    <option value={'multi'}>Multi</option>
    <option value={'tv'}>Tv</option>
  </Select>

    <Button
    id ="submitBtn"
    variant="contained" 
    color="primary" >
      
    Search</Button>
    </div>
    
  )
}
export default Search_bar
