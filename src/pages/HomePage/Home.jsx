import React from 'react';
import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.wrap}>
      <h1 className={css.title}>Camper booking App</h1>
      <p className={css.text}>
        Campervans are more than just a way to get from one destination to
        another. They are your home on the road, your place to retreat to, and a
        way to connect to others. Go and book the best van for the vacation of
        your dream.
      </p>
    </div>
  );
}
