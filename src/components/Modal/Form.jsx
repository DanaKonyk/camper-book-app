import React from 'react';
import css from './Modal.module.css';

const Form = () => {
  return (
    <form className={css.form}>
      <legend className={css.formTitle}>Book your campervan now</legend>
      <p className={css.formText}>
        Stay connected! We are always ready to help you.
      </p>
      <div className={css.inputWrap}>
        <label htmlFor="name">
          <input
            className={css.input}
            type="text"
            name="name"
            placeholder="Name"
          />
        </label>
        <label htmlFor="email">
          <input
            className={css.input}
            type="email"
            name="email"
            placeholder="Email"
          />
        </label>
        <label htmlFor="date">
          <input
            className={css.input}
            type="date"
            name="date"
            placeholder="Booking date"
          />
        </label>
        <label htmlFor="comment">
          <textarea
            className={css.textarea}
            name="comment"
            id="comment"
            placeholder="Comment"
          />
        </label>
      </div>
      <button className={css.formButton} type="submit">
        Send
      </button>
    </form>
  );
};

export default Form;
