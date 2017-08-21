import React, { Component } from 'react';
import './App.css';
import FilmBox from './components/FilmBox.jsx'

class App extends Component {
  render() {
    return (
      <div className="outer-div">
        <h4>UK Opening This Week</h4>
          <FilmBox />
        <h6>See more opening this week</h6>
        <button>Get ShowTimes</button>
      </div>
    );
  }
}

export default App;
