import React from 'react';
// const axios = require('axios');
import Table from './Table.jsx';

class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {likesCount : 0, movies: []};
    this.onMovies = this.onMovies.bind(this);
    this.onLike = this.onLike.bind(this);
  }


  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  onMovies () {
    let newMovies;
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=1d0c061f78fca8588aab156232ce3d92')
    .then(response => {return response.json()})
    .then(response => {
      newMovies = response.results;
      this.setState({movies: newMovies});
    });
  }

  render() {
    return (
      <div>
        <div>Movies:</div>
        <button onClick={this.onMovies}>Get Movies</button>
        <Table data={this.state.movies} />
      </div>
    );
  }

}

export default AwesomeComponent;
