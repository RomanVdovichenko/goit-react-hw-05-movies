import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { movieCastApi } from 'services/moviesApi';

const Cast = () => {
  const { movieId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fatchitem() {
      try {
        const item = await movieCastApi(movieId);
        setItems(item);
      } catch (error) {
        toast.error('Sorry... nothing found.');
      }
    }
    fatchitem();
  }, [movieId]);

  return (
    <>
      <ul>
        {items.map(item => {
          return (
            <li key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                alt={item.name}
                width="150"
              />
              <p>{item.name}</p>
              <p>Character: {item.character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;
