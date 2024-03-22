import React from 'react';
import sprite from '../../images/sprite.svg';
import css from './Card.module.css';

const Card = ({ card }) => {
  return (
    <div className={css.cardWrap}>
      <div className={css.imgWrap}>
        <img src={card.gallery[0]} alt={card.name} />
      </div>
      <div className={css.infoWrap}>
        <p className={css.name}>{card.name}</p>
        <div className={css.buttonWrap}>
          <p className={css.price}>{card.price}</p>
          <button className={css.buttonFav} type="button">
            <svg className={css.iconFav} width="24" height="24">
              <use href={`${sprite}#icon-fav`} />
            </svg>
          </button>
        </div>
      </div>
      <div className={css.ratingLocationWrap}>
        <div className={css.ratingWrap}>
          <svg className={css.iconStar} width="16" height="16">
            <use href={`${sprite}#icon-star`} />
          </svg>
          c
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
        <li>
          <svg className={css.iconAdults} width="20" height="20">
            <use href={`${sprite}#icon-adults`} />
          </svg>
          <p className={css.adults}>{card.adults} adults</p>
        </li>
        <li>
          <svg className={css.iconTransmission} width="20" height="20">
            <use href={`${sprite}#icon-transmission`} />
          </svg>
          <p className={css.adults}>{card.transmission} </p>
        </li>
        <li>
          <svg className={css.iconPetrol} width="20" height="20">
            <use href={`${sprite}#icon-petrol`} />
          </svg>
          <p className={css.adults}>{card.engine} </p>
        </li>
        {card.details.kitchen >= 1 && (
          <li>
            <svg className={css.iconKitchen} width="20" height="20">
              <use href={`${sprite}#icon-kitchen`} />
            </svg>
            <p className={css.adults}>Kitchen</p>
          </li>
        )}
        <li>
          <svg className={css.iconBedroom} width="20" height="20">
            <use href={`${sprite}#icon-bedroom`} />
          </svg>
          <p className={css.adults}>{card.details.beds} beds</p>
        </li>
        {card.details.airConditioner >= 1 && (
          <li>
            <svg className={css.iconWind} width="20" height="20">
              <use href={`${sprite}#icon-water`} />
            </svg>
            <p className={css.adults}>AC</p>
          </li>
        )}
      </ul>
      <button className={css.buttonMore} type="button">
        Show more
      </button>
    </div>
  );
};

export default Card;
