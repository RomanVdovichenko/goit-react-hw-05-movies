import css from './MoviePage.module.css';
import PropTypes from 'prop-types';

export const MoviePage = ({ item }) => {
  return (
    <article className={css.page}>
      <img
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        alt={item.title}
        width="300"
      />
      <div className={css.text}>
        <h2>{`${item.title} (${item.release_date})`}</h2>
        <p>Use score: {item.vote_average}</p>
        <h4>Overview</h4>
        <p className={css.overview}>{item.overview}</p>
        <h4>Genres</h4>
        {item.genres.map(item => {
          return <span key={item.id}>{`${item.name} `}</span>;
        })}
      </div>
    </article>
  );
};

MoviePage.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
  }),
};
