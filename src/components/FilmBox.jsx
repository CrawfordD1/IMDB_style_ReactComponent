import React from 'react';
import FilmList from './FilmList';


class FilmBox extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data: [{
        id:1,
        title: "GhostBusters",
        showtimes: "www.google.co.uk"
      },{
        id:2,
        title: "Lord of the Rings",
        showtimes: "www.google.co.uk"
      },{
        id:3,
        title: "Back to the Future",
        showtimes: "www.google.co.uk"
      }]
    }
  }

  render(){
    return (
        <div className="film-box">
          <FilmList data={this.state.data}/>
        </div>
      )
  }

}

export default FilmBox;