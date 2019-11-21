import React from 'react';
import './App.css';

import Search_bar from './components/Search_bar'
import Fields from './components/Tabs_panels'



function App(){
    return (
    <div className="App">
      <header className="entry-header">
      <h1 className='entry-heading'>React Movies App</h1>
      </header>

      <Search_bar/>
      <Fields/>
      

     
    
    </div>
  )
    

}export default App;
