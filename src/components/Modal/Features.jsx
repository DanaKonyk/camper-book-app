import React from 'react';
import css from './Modal.module.css';
import sprite from '../../images/sprite.svg';

const Features = ({ card }) => {
  return (
    <div className={css.featuresWrap}>
      <ul className={css.featuresList}>
        <li className={css.featureItem}>
          <svg className={css.adultIcon} width="20" height="20">
            <use href={`${sprite}#icon-adults`} />
          </svg>
          {card.adults} Adults
        </li>
        <li className={css.featureItem}>
          <svg className={css.transmissionIcon} width="20" height="20">
            <use href={`${sprite}#icon-transmission`} />
          </svg>
          {card.transmission}
        </li>
        <li className={css.featureItem}>
          <svg className={css.petrolIcon} width="20" height="20">
            <use href={`${sprite}#icon-petrol`} />
          </svg>
          {card.engine}
        </li>
        {card.kitchen > 0 && (
          <li className={css.featureItem}>
            <svg className={css.kitchenIcon} width="20" height="20">
              <use href={`${sprite}#icon-kitchen`} />
            </svg>
            Kitchen
          </li>
        )}
        {card.bathroom > 0 && (
          <li className={css.featureItem}>
            <svg className={css.showerIcon} width="20" height="20">
              <use href={`${sprite}#icon-shower`} />
            </svg>
            Bathroom
          </li>
        )}
        <li className={css.featureItem}>
          <svg className={css.bedroomIcon} width="20" height="20">
            <use href={`${sprite}#icon-bedroom`} />
          </svg>
          {card.beds > 1 ? `${card.beds} Beds` : ` ${card.beds} Bed`}
        </li>
        {card.airConditioner > 0 && (
          <li className={css.featureItem}>
            <svg className={css.acIcon} width="20" height="20">
              <use href={`${sprite}#icon-ac`} />
            </svg>
            AC
          </li>
        )}
        {card.radio > 0 && (
          <li className={css.featureItem}>
            <svg className={css.radioIcon} width="20" height="20">
              <use href={`${sprite}#icon-radio`} />
            </svg>
            Radio
          </li>
        )}
        {card.hob > 0 && (
          <li className={css.featureItem}>
            <svg className={css.hobIcon} width="20" height="20">
              <use href={`${sprite}#icon-hob`} />
            </svg>
            {card.hob} hob
          </li>
        )}
        {card.CD > 0 && (
          <li className={css.featureItem}>
            <svg className={css.cdIcon} width="20" height="20">
              <use href={`${sprite}#icon-cd`} />
            </svg>
            CD
          </li>
        )}
      </ul>
      <h3 className={css.vehicleTitle}>Vehicle Details</h3>
      <hr />
      <ul className={css.vehicleList}>
        <li className={css.vehicleItem}>
          <p>Form</p>
          <p>{card.form}</p>
        </li>
        <li className={css.vehicleItem}>
          <p>Length</p>
          <p>{card.length}</p>
        </li>
        <li className={css.vehicleItem}>
          <p>Width</p>
          <p>{card.width}</p>
        </li>
        <li className={css.vehicleItem}>
          <p>Height</p>
          <p>{card.height}</p>
        </li>
        <li className={css.vehicleItem}>
          <p>Tank</p>
          <p>{card.tank}</p>
        </li>
        <li className={css.vehicleItem}>
          <p>Consumption</p>
          <p>{card.consumption}</p>
        </li>
      </ul>
    </div>
  );
};

export default Features;
