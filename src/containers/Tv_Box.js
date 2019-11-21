import React from 'react'

class Tv_Box extends React.Component{
    render(){
        return <table key={this.props.show.id}>
        <tbody>
          <tr>
            <td>
              <img alt="poster" width="245" height="290"src={this.props.show.poster_src}/>
            </td>
            <td>
              <h3>{this.props.show.name}</h3>
              <p><b>Release Date:  </b>{this.props.show.release_date} | <b>Popularity: </b>{this.props.show.popularity} <br></br> <br></br>
              {this.props.show.overview} </p>
              
              <br/><br/>
              
            </td>
          </tr>
        </tbody>

      </table>
    }
}







export default Tv_Box