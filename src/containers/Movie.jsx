import React from 'react';
import List from '../components/List.jsx';

const base = 'https://api.themoviedb.org/3/discover/movie?api_key=43ebc6d83fb90584067dc3b4f6d8b723&language=en-US&primary_release_date.lte=2017-9-27&sort_by=popularity.desc&with_genres=28'
class Movie extends React.Component {
  constructor(props) {
    super();
    this.state = {movies: [], genres: []};
    this.getMyMovies = this.getMyMovies.bind(this);
    this.getMovieGenres = this.getMovieGenres.bind(this);
  }

  getMyMovies() {
    let url = base;
    fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      this.setState({movies: res.results});
    }.bind(this))
    .catch(function (err) {
      console.log(err)
    });
  }

  getMovieGenres() {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=43ebc6d83fb90584067dc3b4f6d8b723&language=en-US';
    fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      this.setState({genres: res.genres});
    })
    .catch(function (err) {
      console.log(err)
    });
  }

  componentDidMount() {
    this.getMovieGenres();
  }

  render() {
    return (
      <div>
        <p>What genre are you looking for?</p>
        <select>
          <option>Horror</option>
          <option>Love story</option>
        </select>

        <p>Suggest me some</p>
        <select>
          {this.state.genres.map((row, i) => { return <option key={i} id={row.id}>{row.name}</option>})}
        </select>
        <p>Movies</p>
        <button type="submit" onClick={this.getMyMovies}>Get my movies</button>
      </div>
    )
  }
}
export default Movie;
