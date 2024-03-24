import { Navigation } from 'components/Navigation/Navigation';
import React from 'react';
import { useSelector } from 'react-redux';
import { getFavorites } from '../../redux/adverts/selectors';
import Card from 'components/Card/Card';
import css from './Favorites.module.css';

export default function Favorites() {
  const favorites = useSelector(getFavorites);

  return (
    <>
      <Navigation />
      <div>
        {favorites.length > 0 ? (
          <ul className={css.favList}>
            {favorites.map(favorite => (
              <Card key={favorite._id} card={favorite} />
            ))}
          </ul>
        ) : (
          <p className={css.favText}>Nothing added yet..</p>
        )}
      </div>
    </>
  );
}
