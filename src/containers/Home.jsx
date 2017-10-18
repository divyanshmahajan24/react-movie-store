import React from 'react';
import Table from '../components/Table.jsx';

const base = 'https://api.themoviedb.org/3/discover/movie?';
let page = 0;

class Home extends React.Component {
  constructor () {
    super();
    this.state = {movies: []};
    this.getRecentMovies = this.getRecentMovies.bind(this);
  }

  init () {
    this.getRecentMovies();
  }

  getRecentMovies () {
    page = page + 1;
    const date = new Date();
    const lte = [date.getFullYear(), date.getMonth(), date.getDate()].join('-');
    const gte = [(date.getFullYear() - 1), date.getMonth(), date.getDate()].join('-');
    const url = [base, 'primary_release_date.gte=', gte, '&primary_release_date.lte=',
      lte, '&page=', page, '&api_key=1d0c061f78fca8588aab156232ce3d92'].join('');
    fetch(url)
    .then(function(res) {return res.json()})
    .then(function(res) {
      this.setState({movies: this.state.movies.concat(res.results)});
    }.bind(this))
    .catch(err => console.log(err));;
  }

  componentDidMount () {
    this.init();
  }

  render() {
    return (
      <div>
        <h3>Latest Movies</h3>
        <Table data={this.state.movies} />
        <button onClick={this.getRecentMovies}>Get More Movies</button>
      </div>
    )
  }

}
export default Home;
