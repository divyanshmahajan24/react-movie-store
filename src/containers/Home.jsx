import React from 'react';
import List from '../components/List.jsx';

const base = 'https://api.themoviedb.org/3/discover/';
const date = new Date();
const lte = [date.getFullYear(), date.getMonth(), date.getDate()].join('-');
const gte = [(date.getFullYear() - 1), date.getMonth(), date.getDate()].join('-');

class Home extends React.Component {
  constructor () {
    super();
    this.state = {movies: [], tv: []};
    this.getRecentMovies = this.getRecentMovies.bind(this);
    this.getRecentTV = this.getRecentTV.bind(this);
  }

  // fetches recent movies, sorted on descending order of popularity
  getRecentMovies () {
    const url = [base, 'movie?', 'primary_release_date.gte=', gte, '&primary_release_date.lte=',
      lte, '&api_key=1d0c061f78fca8588aab156232ce3d92', '&sort_by=popularity.desc'].join('');
    fetch(url)
    .then(function(res) {return res.json()})
    .then(function(res) {
      this.setState({movies: this.state.movies.concat(res.results)});
      console.log(this.state);
    }.bind(this))
    .catch(err => console.log(err));
  }

  // fetches recent TV series, sorted on descending order of popularity
  getRecentTV() {
    const url = [base, 'tv?', 'first_air_date.gte=', gte, '&first_air_date.lte=',
      lte, '&api_key=1d0c061f78fca8588aab156232ce3d92', '&sort_by=popularity.desc'].join('');
    fetch(url)
    .then(function(res) {return res.json()})
    .then(function(res) {
      this.setState({tv: this.state.tv.concat(res.results)});
      console.log(this.state);
    }.bind(this))
    .catch(err => console.log(err));
  }

  // function called on initialisation
  init () {
    this.getRecentMovies();
    this.getRecentTV();
  }

  componentDidMount () {
    this.init(); //calls init method as soon as the component mounts
  }

  render() {
    return (
      <div>
        <div>
          <h3>Latest Movies</h3>
          <List ref="movies" data={this.state.movies} mapKey="title" />
        </div>
        <div>
          <h3>Latest Tv</h3>
          <List ref="tv" data={this.state.tv} mapKey="name" />
        </div>
      </div>
    )
  }

}
export default Home;
