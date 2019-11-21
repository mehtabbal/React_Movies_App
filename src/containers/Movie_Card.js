import React from 'react'

class Movie_Card extends React.Component{
    render(){

        return <table key={this.props.movies.id}>
        <tbody>
          <tr>
            <td>
              <img alt="poster" width="240" height="290"src={this.props.movies.poster_src}/>
            </td>
            <td>
              <h2>{this.props.movies.title}</h2>
              <p><b>Release Date:  </b>{this.props.movies.release_date} | <b>Popularity: </b>{this.props.movies.popularity} <br></br><br></br>
              {this.props.movies.overview}
              </p>
              
              <br/><br/>
              
            </td>
          </tr>
        </tbody>

      </table>
    }
}
export default Movie_Card