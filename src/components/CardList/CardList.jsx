import React, { useEffect, useState } from 'react';
import { getAdverts } from '../../redux/adverts/selectors';
import { fetchAdverts } from '../../redux/adverts/operations';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'components/Card/Card';
import css from './CardList.module.css';

const CardList = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const adverts = useSelector(getAdverts);

  useEffect(() => {
    dispatch(fetchAdverts(page));
  }, [dispatch, page]);

  const handleMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  return (
    <div>
      <ul className={css.list}>
        {adverts.length > 0 &&
          adverts.map(advert => <Card key={advert._id} card={advert} />)}
      </ul>
      {adverts.length <= 12 && (
        <button className={css.buttonMore} onClick={handleMore} type="button">
          Load more
        </button>
      )}
    </div>
  );
};

export default CardList;
