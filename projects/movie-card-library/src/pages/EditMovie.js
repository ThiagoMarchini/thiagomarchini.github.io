import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: undefined,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id)
      .then((response) => this.setState({ movie: response }))
      .then(() => this.setState({ status: 'loaded' }));
  }

  handleSubmit(updatedMovie) {
    try {
      movieAPI.updateMovie(updatedMovie)
        .then(() => this.setState({ shouldRedirect: true }));
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    const { match: { params: { id } } } = this.props;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    console.log(id);

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default EditMovie;
