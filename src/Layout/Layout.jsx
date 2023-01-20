import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { BsCart4 } from 'react-icons/bs';

import css from '../App.module.scss';

const styles = {
  color: '#010101',
};

function Layout({ children }) {
  const cartList = useSelector(state => state.cart.cart);
  const productsCount = cartList.reduce(
    (acc, { quantity }) => acc + quantity,
    0
  );
  return (
    <div style={styles}>
      <header className={css.header}>
        <nav className={css.nav}>
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
            to="/posts"
          >
            Search Post
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
            className={
              ({ isActive }) =>
                cn(css.NavLink, css.cart, { [css.active]: isActive })
              // `${css.NavLink} ${css.cart} ${isActive ? css.active : ''}`
              // css.NavLink + css.cart + isActive ? css.active : ''
            }
            to="/cart"
          >
            <BsCart4 />
            {productsCount > 0 && (
              <span className={css.indicator}>{productsCount}</span>
            )}
          </NavLink>
        </nav>
      </header>
      {children}
    </div>
  );
}

export default Layout;
