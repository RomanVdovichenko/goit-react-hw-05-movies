import { Outlet, NavLink } from 'react-router-dom';
import css from './Layout.module.css';
import { Suspense } from 'react';

const getActiveClass = ({ isActive }) => {
  return isActive ? css.active : css.link;
};

export const Layout = () => {
  return (
    <>
      <nav className={css.nav}>
        <NavLink to="/" className={getActiveClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={getActiveClass}>
          Movies
        </NavLink>
      </nav>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </>
  );
};
