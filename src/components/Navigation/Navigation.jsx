import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import sprite from '../../images/sprite.svg';

export const Navigation = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <div>
          <NavLink to="/" className={css.iconlink}>
            <svg className={css.iconHelp} width="40" height="40">
              <use href={`${sprite}#icon-van1`} />
            </svg>
          </NavLink>
        </div>
        <div>
          <NavLink to="/" className={css.link}>
            Home
          </NavLink>
          <NavLink to="/catalog" className={css.link}>
            Catalog
          </NavLink>
          <NavLink to="/favorites" className={css.link}>
            Favorites
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
