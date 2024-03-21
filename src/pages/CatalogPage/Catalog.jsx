import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigation } from 'components/Navigation/Navigation';
// import { getAdverts } from '../../redux/adverts/selectors';
import { fetchAdverts } from '../../redux/adverts/operations';

export default function Catalog() {
  const dispatch = useDispatch();
  // const adverts = useSelector(getAdverts);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <div>Catalog</div>
    </>
  );
}
