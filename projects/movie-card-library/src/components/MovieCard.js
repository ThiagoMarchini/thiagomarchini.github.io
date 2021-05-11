import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, imagePath, storyline, title } } = this.props;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img src={ imagePath } alt={ title } />
        <section className="info">
          <div className="card-title">{title}</div>
          <div className="storyline">{storyline}</div>
        </section>
        <section className="link">
          <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        </section>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.shape({
    genre: PropTypes.string,
    id: PropTypes.number,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    subtitle: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
};

export default MovieCard;
