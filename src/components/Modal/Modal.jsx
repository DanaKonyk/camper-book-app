import React from 'react';
import sprite from '../../images/sprite.svg';
import css from './Modal.module.css';
import { createPortal } from 'react-dom';
import Features from './Features';
import Form from './Form';
import Reviews from './Reviews';

const Modal = ({ onClose, advert }) => {
  const handleClose = () => {
    onClose();
  };

  const backdropClose = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div onClick={e => backdropClose(e)} className={css.modalBackdrop}>
      <div className={css.modalBody}>
        <button onClick={handleClose} className={css.button}>
          <svg width="32" height="32" className={css.buttonIcon}>
            <use href={`${sprite}#icon-close`} />
          </svg>
        </button>
        <div className={css.modalContentWrap}>
          <div className={css.contentWrap}>
            <div className={css.advertContentWrap}>
              <h2 className={css.title}>{advert.name}</h2>
              <div className={css.reviewsLocationWrap}>
                <p className={css.rate}>
                  <svg className={css.iconStar} width="16" height="16">
                    <use href={`${sprite}#icon-star`} />
                  </svg>
                  {`${advert.rating} (${advert.reviews.length} Reviews)`}
                </p>
                <p className={css.location}>
                  <svg className={css.iconPin} width="16" height="16">
                    <use href={`${sprite}#icon-pin`} />
                  </svg>
                  {advert.location.split(',').reverse().join(', ')}
                </p>
              </div>
              <p className={css.price}>€{advert.price}.00</p>
            </div>
            <ul className={css.imgList}>
              {advert.gallery.map((image, i) => {
                return (
                  <li key={`${advert._id}/${i}`}>
                    <img
                      className={css.img}
                      src={image}
                      alt={advert.name}
                    ></img>
                  </li>
                );
              })}
            </ul>
            <p className={css.desc}>{advert.description}</p>
          </div>
          <div className={css.additionalContent}>
            <div className={css.nav}>
              <Features></Features>
              <Reviews></Reviews>
              <Form></Form>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
