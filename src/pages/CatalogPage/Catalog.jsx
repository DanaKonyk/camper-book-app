import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from 'components/Navigation/Navigation';
import { getAdverts } from '../../redux/adverts/selectors';
import { fetchAdverts } from '../../redux/adverts/operations';
import Card from 'components/Card/Card';

export default function Catalog() {
  const dispatch = useDispatch();
  const adverts = useSelector(getAdverts);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <ul>
        {adverts.length > 0 &&
          adverts.map(advert => <Card key={advert._id} card={advert} />)}
      </ul>
    </>
  );
}
