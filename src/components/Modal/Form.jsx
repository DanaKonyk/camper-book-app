import React, { useState } from 'react';
import css from './Modal.module.css';
import { useDispatch } from 'react-redux';
import { advertBooking } from '../../redux/adverts/advertsSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(new Date());
  const [comment, setComment] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handleDateChange = e => {
    setDate(e.target.value);
  };

  const handleCommentChange = e => {
    setComment(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newBooking = {
      name,
      email,
      date,
      comment,
    };

    dispatch(advertBooking(newBooking));
    e.target.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
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
            onChange={handleNameChange}
          />
        </label>
        <label htmlFor="email">
          <input
            className={css.input}
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleEmailChange}
          />
        </label>
        <label htmlFor="date">
          <input
            className={css.input}
            type="date"
            name="date"
            placeholder="Booking date"
            onChange={handleDateChange}
          />
        </label>
        <label htmlFor="comment">
          <textarea
            className={css.textarea}
            name="comment"
            id="comment"
            placeholder="Comment"
            onChange={handleCommentChange}
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
