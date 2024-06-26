import React, { useMemo, useState } from 'react';
import sprite from '../../images/sprite.svg';
import css from './Card.module.css';
import Modal from 'components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites } from '../../redux/adverts/selectors';
import { toggleFavorite } from '../../redux/adverts/advertsSlice';

const Card = ({ card }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const favorites = useSelector(getFavorites);
  const dispatch = useDispatch();

  const isCardFavorite = useMemo(
    () => favorites.find(favorite => favorite._id === card._id),
    [favorites, card._id]
  );

  const addToFavorites = () => {
    dispatch(toggleFavorite(card));
  };

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <li className={css.card}>
        <div className={css.imgWrap}>
          <img src={card.gallery[0]} alt={card.name} />
        </div>
        <div className={css.cardWrap}>
          <div className={css.infoWrap}>
            <div className={css.nameWrap}>
              <p className={css.name}>{card.name}</p>
              <div className={css.priceWrap}>
                <p className={css.price}>€{card.price}.00</p>
                <button
                  className={css.buttonFav}
                  type="button"
                  onClick={() => addToFavorites(card._id)}
                >
                  <svg
                    className={`${css.iconFav} ${
                      isCardFavorite ? css.iconFavActive : ''
                    }`}
                    width="24"
                    height="24"
                  >
                    <use href={`${sprite}#icon-fav`} />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className={css.ratingLocationWrap}>
            <div className={css.ratingWrap}>
              <svg className={css.iconStar} width="16" height="16">
                <use href={`${sprite}#icon-star`} />
              </svg>
              <button className={css.buttonRate} type="button">
                {`${card.rating} (${card.reviews.length} Reviews)`}
              </button>
            </div>
            <div className={css.locationWrap}>
              <svg className={css.iconPin} width="16" height="16">
                <use href={`${sprite}#icon-pin`} />
              </svg>
              <p className={css.location}>
                {card.location.split(',').reverse().join(', ')}
              </p>
            </div>
          </div>
          <p className={css.description}>{card.description}</p>
          <ul className={css.detailsList}>
            <li className={css.detailsItem}>
              <svg className={css.iconAdults} width="20" height="20">
                <use href={`${sprite}#icon-adults`} />
              </svg>
              <p className={css.adults}>{card.adults} adults</p>
            </li>
            <li className={css.detailsItem}>
              <svg className={css.iconTransmission} width="20" height="20">
                <use href={`${sprite}#icon-transmission`} />
              </svg>
              <p className={css.adults}>{card.transmission} </p>
            </li>
            <li className={css.detailsItem}>
              <svg className={css.iconPetrol} width="20" height="20">
                <use href={`${sprite}#icon-petrol`} />
              </svg>
              <p className={css.adults}>{card.engine} </p>
            </li>
            {card.kitchen && (
              <li className={css.detailsItem}>
                <svg className={css.iconKitchen} width="20" height="20">
                  <use href={`${sprite}#icon-kitchen`} />
                </svg>
                <p className={css.adults}>Kitchen</p>
              </li>
            )}
            <li className={css.detailsItem}>
              <svg className={css.iconBedroom} width="20" height="20">
                <use href={`${sprite}#icon-bedroom`} />
              </svg>
              <p className={css.adults}>{card.beds} beds</p>
            </li>
            {card.airConditioner && (
              <li className={css.detailsItem}>
                <svg className={css.iconWind} width="20" height="20">
                  <use href={`${sprite}#icon-ac`} />
                </svg>
                <p className={css.adults}>AC</p>
              </li>
            )}
          </ul>
          <button className={css.buttonMore} type="button" onClick={handleOpen}>
            Show more
          </button>
        </div>
      </li>
      {modalOpen && <Modal onClose={handleClose} advert={card}></Modal>}
    </>
  );
};

export default Card;
