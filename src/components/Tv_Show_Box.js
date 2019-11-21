import React, { Component } from 'react';
import axios from 'axios'
import Tv_Box from '../containers/Tv_Box'
import { API_KEY, tv_Shows } from '../config/api_config'

var item2= null

class Tv_Show_Area extends Component{

  
  constructor (props){
    item2 = props.info2
    super(props)
    this.state= {}
    this.Search()
    }
    Search = async (show) => {
    try {
    const url= tv_Shows + item2
   
    const res = await axios.get(url, {
    params: {
    api_key: API_KEY,
    query: show
    }
    })
    
   
    var tv_array = []
    res.data.results.forEach((tvShow)=>{
    tvShow.poster_src = "https://image.tmdb.org/t/p/w185" + tvShow.poster_path
   
    const line = <Tv_Box key={tvShow.id} show={tvShow} />
    tv_array.push(line)
      
    })
    this.setState({lines:tv_array})
    } catch (error) {
    throw error
    }
}
componentDidUpdate(){
  this.Search()
}
  render() {
    return (
    <div className="App">

      {this.state.lines}
    
    </div>
    )
  }
}
export default Tv_Show_Area;
