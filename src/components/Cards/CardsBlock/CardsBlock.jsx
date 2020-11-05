import React from 'react';
import { NavLink } from 'react-router-dom';
import car from '../../../images/icons/car-passanger.png';
import sun from '../../../images/icons/sun.png';
import newIcon from '../../../images/icons/new.png';
import activeStar from '../../../images/icons/active-star.png';
import star from '../../../images/icons/star.png';
import newProperty from '../../../images/icons/new-property.png';
import hitProperty from '../../../images/icons/hit-property.png';
import saleProperty from '../../../images/icons/sale-property.png';
import cardBasket from '../../../images/icons/card-basket.png';
import cardCompare from '../../../images/icons/card-compare.png';
import cardStar from '../../../images/icons/card-star.png';
import wheel1 from '../../../images/wheel-1.png';
import wheel2 from '../../../images/wheel-2.png';
import wheel3 from '../../../images/wheel-3.png';
import wheel4 from '../../../images/wheel-4.png';
import './CardsBlock.scss';

export const CardsBlock = () => {
  return(
    <div className="cards__block">

      <div className="cards__block-item card">
        <span className="card__label">Mark</span>
        <div className="card__title">
          <span className="card__title-text">
            Антифриз Fosser Antifreeze 
            <br></br>
            FA 12 Readymix 1 л Concentrat, Germany
          </span>
        </div>
        <div className="card__feedback">
          <div className="card__feedback-stars stars">
            <img src={activeStar} alt="active-star" className="stars-item active-star"/>
            <img src={activeStar} alt="active-star" className="stars-item active-star"/>
            <img src={activeStar} alt="active-star" className="stars-item active-star"/>
            <img src={activeStar} alt="star" className="stars-item active-star"/>
            <img src={activeStar} alt="star" className="stars-item active-star"/>
            <span className="card__feedback-list">
              <NavLink
                to={'/link2'}
                className={'card__feedback-link'}
              >
                Отзывы (10)
              </NavLink>
            </span>
          </div>
          <span className="card__feedback-amount">В наличии: 24 шт.</span>
        </div>
        <div className="card__images">
          <div className="card__images-icons cardIcon">
            <div className="cardIcon__item">
              <img src={sun} alt="" className="cardIcon__item-image"/>
              <span className="cardIcon__item-text">ЛЕТНЯЯ</span>
            </div>
            <div className="cardIcon__item">
              <img src={car} alt="" className="cardIcon__item-image"/>
              <span className="cardIcon__item-text">ЛЕГКОВАЯ</span>
            </div>
            <div className="cardIcon__item">
              <img src={newIcon} alt="" className="cardIcon__item-image"/>
              <span className="cardIcon__item-text">НОВАЯ</span>
            </div>
          </div>
          <img src={wheel1} alt="" className="card__images-image cardImage1"/>
        </div>
        <div className="card__properties card__properties-item">
          <span className="card__properties-new card__properties-item">
            <img src={newProperty} alt="" className="card__properties-newImage"/>
          </span>
          <span className="card__properties-hit card__properties-item">
            <img src={hitProperty} alt="" className="card__properties-hitImage"/>
          </span>
          <span className="card__properties-sale card__properties-item">
            <img src={saleProperty} alt="" className="card__properties-saleImage"/>
          </span>
        </div>
        <div className="card__price">
          <span className="card__price-actual">
            599
            <span className="card__price-grn"> ГРН.</span>
          </span>
          <span className="card__price-old">1 250 ГРН.</span>
        </div>
        <div className="card__buy">
          <button className="card__buy-button">
            <img src={cardBasket} alt="" className="card__buy-icon"/>
            <span className="card__buy-text">КУПИТЬ ТОВАР</span>
          </button>
        </div>
        <div className="card__select">
          <button className="card__select-button">
            <img src={cardCompare} alt="" className="card__select-compareImage"/>
            <span className="card__select-text">Сравнить товар</span>
          </button>
          <button className="card__select-button">
            <img src={cardStar} alt="" className="card__select-star"/>
            <span className="card__select-text">Сравнить товар</span>
          </button>
        </div>
      </div>

      <div className="cards__block-item card">
        <span className="card__label">Mark</span>
        <div className="card__title">
          <span className="card__title-text">
            Антифриз Fosser Antifreeze
            <br></br>
            FA 12 Readymix 1 л Concentrat, Germany
          </span>
        </div>
        <div className="card__feedback">
          <div className="card__feedback-stars stars">
            <img src={activeStar} alt="active-star" className="stars-item active-star"/>
            <img src={activeStar} alt="active-star" className="stars-item active-star"/>
            <img src={activeStar} alt="active-star" className="stars-item active-star"/>
            <img src={star} alt="star" className="stars-item star"/>
            <img src={star} alt="star" className="stars-item star"/>
            <span className="card__feedback-list">
              <NavLink
                to={'/link2'}
                className={'card__feedback-link'}
              >
                Отзывы (10)
              </NavLink>
            </span>
          </div>
          <span className="card__feedback-amount">В наличии: 24 шт.</span>
        </div>
        <div className="card__images">
          <div className="card__images-icons cardIcon">
            <div className="cardIcon__item">
              <img src={sun} alt="" className="cardIcon__item-image"/>
              <span className="cardIcon__item-text">ЛЕТНЯЯ</span>
            </div>
            <div className="cardIcon__item">
              <img src={newIcon} alt="" className="cardIcon__item-image"/>
              <span className="cardIcon__item-text">НОВАЯ</span>
            </div>
          </div>
          <img src={wheel2} alt="" className="card__images-image cardImage2"/>
        </div>
        <div className="card__properties card__properties-item">
          <span className="card__properties-new card__properties-item">
            <img src={newProperty} alt="" className="card__properties-newImage"/>
          </span>
          <span className="card__properties-hit card__properties-item">
            <img src={hitProperty} alt="" className="card__properties-hitImage"/>
          </span>
        </div>
        <div className="card__price">
          <span className="card__price-actual">
            599
            <span className="card__price-grn"> ГРН.</span>
          </span>
          <span className="card__price-old">1 250 ГРН.</span>
        </div>
        <div className="card__buy">
          <button className="card__buy-button">
            <img src={cardBasket} alt="" className="card__buy-icon"/>
            <span className="card__buy-text">КУПИТЬ ТОВАР</span>
          </button>
        </div>
        <div className="card__select">
          <button className="card__select-button">
            <img src={cardCompare} alt="" className="card__select-compareImage"/>
            <span className="card__select-text">Сравнить товар</span>
          </button>
          <button className="card__select-button">
            <img src={cardStar} alt="" className="card__select-star"/>
            <span className="card__select-text">Сравнить товар</span>
          </button>
        </div>
      </div>

      <div className="cards__block-item card">
        <span className="card__label">Mark</span>
        <div className="card__title">
          <span className="card__title-text">
            Антифриз Fosser Antifreeze
            <br></br>
            FA 12 Readymix 1 л Concentrat, Germany
          </span>
        </div>
        <div className="card__feedback">
          <div className="card__feedback-stars stars">
            <img src={star} alt="active-star" className="stars-item star"/>
            <img src={star} alt="active-star" className="stars-item star"/>
            <img src={star} alt="active-star" className="stars-item star"/>
            <img src={star} alt="star" className="stars-item star"/>
            <img src={star} alt="star" className="stars-item star"/>
            <span className="card__feedback-list">
              <NavLink
                to={'/link2'}
                className={'card__feedback-link'}
              >
                Без отзывов
              </NavLink>
            </span>
          </div>
          <span className="card__feedback-amount">В наличии: 24 шт.</span>
        </div>
        <div className="card__images">
          <div className="card__images-icons cardIcon">
            <div className="cardIcon__item">
              <img src={sun} alt="" className="cardIcon__item-image"/>
              <span className="cardIcon__item-text">ЛЕТНЯЯ</span>
            </div>
            <div className="cardIcon__item">
              <img src={car} alt="" className="cardIcon__item-image"/>
              <span className="cardIcon__item-text">ЛЕГКОВАЯ</span>
            </div>
            <div className="cardIcon__item">
              <img src={newIcon} alt="" className="cardIcon__item-image"/>
              <span className="cardIcon__item-text">НОВАЯ</span>
            </div>
          </div>
          <img src={wheel3} alt="" className="card__images-image cardImage3"/>
        </div>
        <div className="card__properties card__properties-item">
          <span className="card__properties-new card__properties-item">
            <img src={newProperty} alt="" className="card__properties-newImage"/>
          </span>
        </div>
        <div className="card__price">
          <span className="card__price-actual">
            9 570
            <span className="card__price-grn"> ГРН.</span>
          </span>
          <span className="card__price-old">11 250 ГРН.</span>
        </div>
        <div className="card__buy">
          <button className="card__buy-button">
            <img src={cardBasket} alt="" className="card__buy-icon"/>
            <span className="card__buy-text">КУПИТЬ ТОВАР</span>
          </button>
        </div>
        <div className="card__select">
          <button className="card__select-button">
            <img src={cardCompare} alt="" className="card__select-compareImage"/>
            <span className="card__select-text">Сравнить товар</span>
          </button>
          <button className="card__select-button">
            <img src={cardStar} alt="" className="card__select-star"/>
            <span className="card__select-text">Сравнить товар</span>
          </button>
        </div>
      </div>

      <div className="cards__block-item card">
        <span className="card__label">Mark</span>
        <div className="card__title">
          <span className="card__title-text">
            Антифриз Fosser Antifreeze 
          </span>
        </div>
        <div className="card__feedback">
          <div className="card__feedback-stars stars">
            <img src={activeStar} alt="active-star" className="stars-item active-star"/>
            <img src={activeStar} alt="active-star" className="stars-item active-star"/>
            <img src={activeStar} alt="active-star" className="stars-item active-star"/>
            <img src={activeStar} alt="star" className="stars-item star"/>
            <img src={activeStar} alt="star" className="stars-item star"/>
            <span className="card__feedback-list">
              <NavLink
                to={'/link2'}
                className={'card__feedback-link'}
              >
                Отзывы (10)
              </NavLink>
            </span>
          </div>
          <span className="card__feedback-amount">В наличии: 24 шт.</span>
        </div>
        <div className="card__images">
          <div className="card__images-icons cardIcon">
            <div className="cardIcon__item">
              <img src={sun} alt="" className="cardIcon__item-image"/>
              <span className="cardIcon__item-text">ЛЕТНЯЯ</span>
            </div>
            <div className="cardIcon__item">
              <img src={car} alt="" className="cardIcon__item-image"/>
              <span className="cardIcon__item-text">ЛЕГКОВАЯ</span>
            </div>
          </div>
          <img src={wheel4} alt="" className="card__images-image cardImage4"/>
        </div>
        <div className="card__properties card__properties-item">
        </div>
        <div className="card__price">
          <span className="card__price-actual">
            599
            <span className="card__price-grn"> ГРН.</span>
          </span>
        </div>
        <div className="card__buy">
          <button className="card__buy-button">
            <img src={cardBasket} alt="buy-button" className="card__buy-icon"/>
            <span className="card__buy-text">КУПИТЬ ТОВАР</span>
          </button>
        </div>
        <div className="card__select">
          <button className="card__select-button">
            <img src={cardCompare} alt="compare-image" className="card__select-compareImage"/>
            <span className="card__select-text">Сравнить товар</span>
          </button>
          <button className="card__select-button">
            <img src={cardStar} alt="chosen-image" className="card__select-star"/>
            <span className="card__select-text">Сравнить товар</span>
          </button>
        </div>
      </div>
    </div>
  )
}
