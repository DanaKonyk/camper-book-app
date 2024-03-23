import React from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import CardList from 'components/CardList/CardList';
import Filtersbar from 'components/FiltersBar/Filtersbar';
import css from './Catalog.module.css';

export default function Catalog() {
  return (
    <>
      <Navigation />
      <div className={css.wrap}>
        <Filtersbar />
        <CardList />
      </div>
    </>
  );
}
