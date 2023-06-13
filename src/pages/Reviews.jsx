import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieReviewsApi } from 'services/moviesApi';
import css from './Reviews.module.css';
import { toast } from 'react-hot-toast';

const Reviews = () => {
  const { movieId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fatchitem() {
      try {
        const item = await movieReviewsApi(movieId);
        setItems(item);
      } catch (error) {
        toast.error('Sorry... no reviews found.');
      }
    }
    fatchitem();
  }, [movieId]);

  return (
    <>
      {items.length === 0 && (
        <p className={css.reviews}>We don't have any reviews for this movie.</p>
      )}
      <ul>
        {items.map(item => {
          return (
            <li key={item.id}>
              <h4>{item.author}</h4>
              <p className={css.text}>{item.content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Reviews;
