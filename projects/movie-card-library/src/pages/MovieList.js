import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.fetchMovies = this.fetchMovies.bind(this);
    this.checkLoading = this.checkLoading.bind(this);

    this.state = {
      movies: undefined,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  checkLoading() {
    const { movies } = this.state;
    if (!movies) {
      return <Loading />;
    }
    return movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
  }

  fetchMovies() {
    movieAPI.getMovies()
      .then((data) => this.setState({ movies: [...data] }));
  }

  render() {
    return (
      <section>
        <div data-testid="movie-list" className="movie-list">
          {this.checkLoading()}
        </div>
        <div className="add-card">
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
      </section>
    );
  }
}

export default MovieList;
