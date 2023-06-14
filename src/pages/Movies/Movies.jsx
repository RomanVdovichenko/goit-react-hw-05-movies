import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { movieSearchApi } from 'services/moviesApi';
import toast from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const query = searchParams.get('query');

  const handleSubmit = event => {
    event.preventDefault();
    const search = event.currentTarget.elements.query.value.trim();
    setSearchParams({ query: search });
    if (!search) {
      toast.success('Please, enter a request.');
      setSearchParams({});
    }
  };

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }
    setLoading(true);
    async function fatchitem() {
      try {
        const item = await movieSearchApi(query);
        setMovies(item);
        if (item.length === 0) {
          toast.error('Sorry... no movies found.');
        }
      } catch (error) {
        toast.error('Sorry... no movies found.');
      } finally {
        setLoading(false);
      }
    }
    fatchitem();
  }, [query]);

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input type="text" name="query" autoFocus />
        <button type="submit">Search</button>
      </form>
      {loading && <Loader />}
      <ul>
        {!loading &&
          movies.map(item => {
            return (
              <li key={item.id}>
                <Link to={`/movies/${item.id}`} state={{ from: location }}>
                  {item.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Movies;
