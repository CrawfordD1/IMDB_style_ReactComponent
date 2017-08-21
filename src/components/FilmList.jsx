import React from 'react';
import Film from './Film.jsx';

class FilmList extends React.Component {
  render(){

    let filmNodes = this.props.data.map((film) => {
      return (
            <Film showtimes = {film.showtimes}>{film.title}</Film>
        );
    });

    return(
        <div className="film-list">
          {filmNodes}
        </div>
      )
  } 
}

export default FilmList