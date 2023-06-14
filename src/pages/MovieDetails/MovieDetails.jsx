import { MoviePage } from 'components/MoviePage/MoviePage';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { moviePageApi } from 'services/moviesApi';
import { TiArrowLeftThick } from 'react-icons/ti';
import css from './MovieDetails.module.css';
import { toast } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const backLinkRef = useRef(location?.state?.from ?? '/');

  useEffect(() => {
    async function fatchitem() {
      setLoading(true);
      try {
        const item = await moviePageApi(movieId);
        setItem(item);
      } catch (error) {
        toast.error('Sorry... no movies found.');
      } finally {
        setLoading(false);
      }
    }
    fatchitem();
  }, [movieId]);

  return (
    <>
      <Link to={backLinkRef.current}>
        <TiArrowLeftThick />
        Go back
      </Link>
      {loading && <Loader />}
      <div>{item && <MoviePage item={item} />}</div>
      <hr />
      <p className={css.details}>
        <b>Additional information</b>
      </p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <hr />
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
