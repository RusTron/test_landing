import React from 'react';
import { CardsBlock } from './CardsBlock';
import { NavLink } from 'react-router-dom';
import './Cards.scss';

export const Cards = () => {
  return (
    <div className="cards">
      <div className="cards__header">
        <span className="cards__header-title">Карточки товаров</span>
        <div className="cards__header-item">
          <NavLink
            to={'/link3'}
            className={'cards__header-link'}
          >
            Ссылка в каталог
          </NavLink>
          <span className="cards__header-line"></span>
          <span className="cards__header-arrow"></span>
        </div>
      </div>
      <CardsBlock />
    </div>
  )
}
