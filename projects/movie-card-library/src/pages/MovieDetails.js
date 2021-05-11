import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.fetchMovies = this.fetchMovies.bind(this);
    this.checkLoading = this.checkLoading.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);

    this.state = {
      movie: undefined,
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  checkLoading() {
    const { movie } = this.state;
    if (!movie) {
      return <Loading />;
    }
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <section className="movie-details">
        <img alt="Movie Cover" src={ `../../${imagePath}` } />
        <div className="details">
          <p>{ `Title: ${title}` }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{`Rating: ${rating}`}</p>
        </div>
        <div className="links">
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
          <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
        </div>
      </section>
    );
  }

  fetchMovies() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovies()
      .then((movies) => movies.filter((movie) => movie.id === parseInt(id, 10)))
      .then((data) => this.setState({ movie: data[0] }));
  }

  deleteMovie() {
    const { movie: { id } } = this.state;
    movieAPI.deleteMovie(id)
      .then(() => this.setState({ shouldRedirect: true }));
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="movie-details">
        {this.checkLoading()}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MovieDetails;
