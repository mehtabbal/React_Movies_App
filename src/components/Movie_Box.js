import React, { Component } from 'react';
import axios from 'axios'
import Movie_Card from '../containers/Movie_Card'
import { API_KEY, movies_Url } from '../config/api_config'
var item= null
class Movie_Box extends Component{

  constructor (props){
    item = props.info
    console.log(item)

    super(props)
    this.state= { type:"popular" }
    this.find()
    }

    find = async (movies) => {

  
    try {
    const url= movies_Url+item 
    
    const res = await axios.get(url, {
    params: {
    api_key: API_KEY,
    query: movies
    }
    })
    
    var movieArray = []
    res.data.results.forEach((movie)=>{
    movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path

   
    const line = <Movie_Card key={movie.id} movies={movie} />
    movieArray.push(line)

    
    })
    
    this.setState({lines:movieArray})
    } catch (error) {
    throw error
    }
}
componentDidUpdate(){
  this.find()
}

  render() {
    return (
    <div className="App">

      {this.state.lines}
    
    </div>
    )
  }
}
export default Movie_Box;
