import React from 'react';

class Film extends React.Component{
  render(){
    return(
      <div className="film">
        <h5 className="film-title">{this.props.children}</h5>
        <a href={this.props.showtimes}>Showtimes</a>
      </div>
    );
  }
}

export default Film;