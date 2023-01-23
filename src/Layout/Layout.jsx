import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import css from '../App.module.scss';

const styles = {
  color: '#010101',
};

function Layout({ children }) {
  return (
    <div style={styles}>
      <header className={css.header}>
        <nav>
          <NavLink
            className={({ isActive }) =>
              cn(css.NavLink, { [css.active]: isActive })
            }
            to="/"
          >
            Posts
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn(css.NavLink, { [css.active]: isActive })
            }
            to="/details"
          >
            Details
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn(css.NavLink, { [css.active]: isActive })
            }
            to="/products"
          >
            Products
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn(css.NavLink, { [css.active]: isActive })
            }
            to="/register"
          >
            Sign Up
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn(css.NavLink, { [css.active]: isActive })
            }
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn(css.NavLink, { [css.active]: isActive })
            }
            to="/contacts"
          >
            Contacts
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn(css.NavLink, { [css.active]: isActive })
            }
            to="/cart"
          >
            Cart
          </NavLink>
        </nav>
      </header>
      {children}
    </div>
  );
}

export default Layout;
