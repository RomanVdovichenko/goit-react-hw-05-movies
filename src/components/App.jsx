import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { lazy } from 'react';

const load = componentName => {
  return lazy(() => import(`../pages/${componentName}/${componentName}`));
};

const Home = load('Home');
const Movies = load('Movies');
const MovieDetails = load('MovieDetails');
const Cast = load('Cast');
const Reviews = load('Reviews');
const Layout = lazy(() =>
  import('./Layout/Layout').then(module => ({
    default: module.Layout,
  }))
);

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};
