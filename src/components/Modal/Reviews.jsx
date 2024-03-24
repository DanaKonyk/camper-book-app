import React from 'react';
import sprite from '../../images/sprite.svg';
import css from './Modal.module.css';

const Reviews = ({ card }) => {
  return (
    <div className={css.reviewsWrap}>
      <ul className={css.reviewsList}>
        {card.reviews.map(({ reviewer_name, reviewer_rating, comment }, i) => (
          <li key={`${reviewer_name}/${i}`}>
            <div className={css.ratingWrap}>
              <div className={css.avatarWrap}>{reviewer_name.slice(0, 1)}</div>
              <div className={css.nameRatingWrap}>
                <p className={css.reviewsName}>{reviewer_name}</p>
                <ul className={css.ratingList}>
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <li key={i}>
                        <svg
                          width="20"
                          height="20"
                          className={
                            css.starIcon +
                            (Math.round(reviewer_rating) < i + 1
                              ? ''
                              : ' ' + css.highlighted)
                          }
                        >
                          <use href={`${sprite}#icon-star`} />
                        </svg>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <p className={css.reviewsComment}>{comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
