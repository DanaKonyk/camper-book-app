import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from 'components/Navigation/Navigation';
import { getAdverts } from '../../redux/adverts/selectors';
import { fetchAdverts } from '../../redux/adverts/operations';
import Card from 'components/Card/Card';
import css from './Catalog.module.css';

export default function Catalog() {
  const dispatch = useDispatch();
  const adverts = useSelector(getAdverts);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <ul className={css.list}>
        {adverts.length > 0 &&
          adverts.map(advert => <Card key={advert._id} card={advert} />)}
      </ul>
    </>
  );
}
