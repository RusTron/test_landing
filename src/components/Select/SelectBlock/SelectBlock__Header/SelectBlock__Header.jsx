import React, { useState } from 'react';
import classNames from 'classnames';
import car from '../../../../images/icons/car.png';
import truck from '../../../../images/icons/truck.png';
import wheel from '../../../../images/icons/wheel.png';
import canister from '../../../../images/icons/canister.png';
import accumulator from '../../../../images/icons/accumulator.png';
import './SelectBlock__Header.scss';

export const SelectBlock__Header = () => {
  const [ activeLink, setActiveLink ] = useState('Ссылка 1');

  return (
    <div className="selectBlock__header linksBlock">
      <ul 
        className="linksBlock__list"
        onClick={({target})=> {
          if(target.localName === 'img'){
            setActiveLink(target.alt)
          } else {
          setActiveLink(target.innerText)}}}
        >
      <li className={classNames("linksBlock__list-item", {"activeLink": activeLink === 'Ссылка 1'})}>
          <img src={car} alt="Ссылка 1" className="linksBlock__list-image"/>
          <a href="#" className="linksBlock__list-link"> Ссылка 1</a>
        </li>
        <li className={classNames("linksBlock__list-item", {"activeLink": activeLink === "Ссылка 2"})}>
          <img src={truck} alt="Ссылка 2" className="linksBlock__list-image"/>
          <a href="#" className="linksBlock__list-link"> Ссылка 2</a>
        </li>
        <li className={classNames("linksBlock__list-item", {"activeLink": activeLink === "Ссылка 3"})}>
          <img src={wheel} alt="Ссылка 3" className="linksBlock__list-image"/>
          <a href="#" className="linksBlock__list-link"> Ссылка 3</a>
        </li>
        <li className={classNames("linksBlock__list-item", {"activeLink": activeLink === "Ссылка 4"})}>
          <img src={canister} alt="Ссылка 4" className="linksBlock__list-image"/>
          <a href="#" className="linksBlock__list-link"> Ссылка 4</a>
        </li>
        <li className={classNames("linksBlock__list-item", {"activeLink": activeLink === "Ссылка 5"})}>
          <img src={accumulator} alt="Ссылка 5" className="linksBlock__list-image"/>
          <a href="#" className="linksBlock__list-link"> Ссылка 5</a>
        </li>
      </ul>
    </div>
  )
}
