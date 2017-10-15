import React from 'react';
const axios = require('axios');

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
    axios.get('http://www.theimdbapi.org/api/find/movie?title={love}')
    .then(function (response) {
      newMovies = response.data;
      this.setState({movies: newMovies});
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        Likes : <span>{this.state.likesCount}</span>
        <div><button onClick={this.onLike}>Like Me</button></div>
        <div>Movies:</div>
        <div>
          <table>
            <tbody>
              {this.state.movies.map(movie => {return <tr key={movie.imdb_id}><td>{movie.title}</td></tr>})}
            </tbody>
          </table>
        </div>
        <div><button onClick={this.onMovies}>Get Movies</button></div>
      </div>
    );
  }

}

export default AwesomeComponent;
