import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Tv_Show_Box from './Tv_Show_Box'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width:'2in',
    
    
  },
 
}));

 function Category_tvShows() {
  const classes = useStyles();
  const [Category, setValue] = React.useState('');
   const inputLabel = React.useRef(null);
    
   const handleChange = event => {
    setValue(event.target.value);
    new Tv_Show_Box({"info2": event.target.value});
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
        Category
      </InputLabel>
      <Select
      onChange={handleChange}
    >
   
        <MenuItem value={'airing_today'}>Airing Today</MenuItem>
        <MenuItem value={'on_the_air'}>On The Air</MenuItem>
        <MenuItem value={'popular'}>Popular</MenuItem>
        <MenuItem value={'top_rated'}>Top Rated</MenuItem>
      </Select>
    </FormControl>
      
    
  )
}
export default Category_tvShows