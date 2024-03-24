import React, { useEffect, useRef, useState } from 'react';
import {
  getAdverts,
  getIsLoading,
  getTotal,
} from '../../redux/adverts/selectors';
import { fetchAdverts } from '../../redux/adverts/operations';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'components/Card/Card';
import css from './CardList.module.css';
import Loader from '../Loader/Loader';

const CardList = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const adverts = useSelector(getAdverts);
  const total = useSelector(getTotal);
  const loading = useSelector(getIsLoading);
  const currentPage = useRef(false);

  useEffect(() => {
    if (!currentPage.current) {
      currentPage.current = true;
      dispatch(fetchAdverts(page));
    }
  }, [dispatch, page]);

  const handleMore = () => {
    currentPage.current = false;
    setPage(prevPage => prevPage + 1);
  };
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <ul className={css.list}>
            {adverts.length > 0 &&
              adverts.map(advert => <Card key={advert._id} card={advert} />)}
          </ul>
          {adverts.length < total && (
            <button
              className={css.buttonMore}
              onClick={handleMore}
              type="button"
            >
              Load more
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default CardList;
