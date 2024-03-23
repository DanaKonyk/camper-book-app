import css from './FiltersBar.module.css';
import React from 'react';
import { equipList, vehicleList } from '../../services/data';
import sprite from '../../images/sprite.svg';

const Filtersbar = () => {
  return (
    <div className={css.mainWrap}>
      <label className={css.locationWrap}>
        Location
        <input
          className={css.input}
          type="text"
          name="location"
          placeholder="Kyiv, Ukraine"
          autoFocus
        />
      </label>

      <div className={css.filtersWrap}>
        <p className={css.name}>Filters</p>
        <form action="">
          <fieldset className={css.filtersForm}>
            <legend className={css.filtersName}>Vehicle equipment</legend>
            <div className={css.equipWrap}>
              {equipList.map(equip => {
                return (
                  <label key={equip.id} className={css.checkboxWrap}>
                    <input
                      type="checkbox"
                      name="equipment"
                      value={equip.value}
                    />
                    <div className={css.iconWrap}>
                      <svg width="32" height="32" className={css.icon}>
                        <use href={`${sprite}#${equip.src}`} />
                      </svg>
                      <span className={css.descrip}>{equip.name}</span>
                    </div>
                  </label>
                );
              })}
            </div>
          </fieldset>
          <fieldset className={css.filtersForm}>
            <legend className={css.filtersName}>Vehicle type</legend>
            <div className={css.equipWrap}>
              {vehicleList.map(vehicle => {
                return (
                  <label key={vehicle.id} className={css.checkboxWrap}>
                    <input
                      type="radio"
                      name="equipment"
                      value={vehicle.value}
                    />
                    <div className={(css.iconWrap, css.iconFill)}>
                      <svg width="32" height="32" className={css.icon}>
                        <use href={`${sprite}#${vehicle.src}`} />
                      </svg>
                      <span className={css.descrip}>{vehicle.name}</span>
                    </div>
                  </label>
                );
              })}
            </div>
          </fieldset>
          <button type="submit" className={css.button}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Filtersbar;
