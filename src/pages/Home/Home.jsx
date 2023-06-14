import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation } from 'react-router-dom';
import { moviesApi } from 'services/moviesApi';

const useFatchItem = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fatchItem() {
      setLoading(true);
      try {
        const movies = await moviesApi();
        setItems(movies);
      } catch (error) {
        toast.error('Sorry... no movies found.');
      } finally {
        setLoading(false);
      }
    }
    fatchItem();
  }, []);
  return { items, loading };
};

const Home = () => {
  const location = useLocation();
  const { items, loading } = useFatchItem();
  return (
    <>
      <main>
        <h1>Trending today</h1>
        {loading && <Loader />}
        <ul>
          {items.map(item => {
            return (
              <li key={item.id}>
                <Link to={`movies/${item.id}`} state={{ from: location }}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default Home;
