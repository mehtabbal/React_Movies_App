import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Movie_Box from './Movie_Box'



const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width:'2in',
    
    
  },
 
}));

 function Category_movie() {
  const classes = useStyles();
  const [Category, setValue] = React.useState('');
  const inputLabel = React.useRef(null);
  
  

  const handleChange = event => {
    setValue(event.target.value);
    new Movie_Box({"info": event.target.value})
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
        Category
      </InputLabel>
      <Select
      onChange={handleChange}
       >
       
        <MenuItem value={'now_playing'}>Now Playing</MenuItem>
        <MenuItem value={'popular'}>Popular</MenuItem>
        <MenuItem value={'top_rated'}>Top Rated</MenuItem>
        <MenuItem value={'upcoming'}>Upcoming</MenuItem>
      </Select>
    </FormControl>
      
    
  )
}export default Category_movie