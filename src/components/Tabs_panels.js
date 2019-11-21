import React from 'react';
import PropTypes from 'prop-types';
import Category_movie from './Category_movie'
import Category_tvShows from './Category_tvShows'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

 
 
import Movie_Box from './Movie_Box';
import Tv_Show_Area from './Tv_Show_Box';





function TabPanel(props) {
  const { children, value, index,  } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      
    >
      <Box>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
 
    border: '1px solid grey',
    margin:'2%'
    
  },
  
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} 
        onChange={handleChange} 
        variant="fullWidth"
        className = "tab-bar"
        
        >
          <Tab id = "t1" label="MOVIES" {...a11yProps(0)}/>
          <Tab id = "t2" label="SEARCH RESULT" {...a11yProps(1)} />
          <Tab id = "t3" label="TV SHOWS" {...a11yProps(2)} />
          
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
    
  <h3> MOVIES </h3>
  
        <Category_movie/>
        <Movie_Box info={"popular"}/>
        
        
      </TabPanel>
      <TabPanel value={value} index={1}>
        
        <h3>Please Enter A Search</h3>
        
          
       
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h3>TV SHOWS</h3>
        
        <Category_tvShows/>
        <Tv_Show_Area info2={"airing_today"}/>
        
      </TabPanel>
    </div>
  );
  
}

