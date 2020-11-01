import React, { useState } from 'react';
import arrow from '../../../images/icons/arrow-grey.png';
import classNames from 'classnames';
import './Menu.scss';

export const Menu = () => {
  const [ openedMenu, setOpenedMenu] = useState(false)
  return(
    <div className="menu">
      <div 
        className="menu__header"
        // onClick={()=> setOpenedMenu(!openedMenu)}
      >
        <div 
          className={classNames("menu__header-burger", {"open": openedMenu})}
          onClick={()=>setOpenedMenu(!openedMenu)}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="menu__header-title">Меню</div>
      </div>
      {openedMenu && (<ul className="menu__link">
        <li className="menu__link-item">
          <a href="#">Ссылка 1</a>
          <img src={arrow} alt="" className="menu__link-image"/>
        </li>
        <li className="menu__link-item">
          <a href="#">Ссылка 2</a>
          <img src={arrow} alt="" className="menu__link-image"/>
        </li>
        <li className="menu__link-item">
          <a href="#">Ссылка 3</a>
          <img src={arrow} alt="" className="menu__link-image"/>
        </li>
        <li className="menu__link-item">
          <a href="#">Ссылка 4</a>
          <img src={arrow} alt="" className="menu__link-image"/>
        </li>
        <li className="menu__link-item">
          <a href="#">Ссылка 5</a>
          <img src={arrow} alt="" className="menu__link-image"/>
        </li>
        <li className="menu__link-item">
          <a href="#">Ссылка 6</a>
          <img src={arrow} alt="" className="menu__link-image"/>
        </li>
        <li className="menu__link-item">
          <a href="#">Ссылка 7</a>
          <img src={arrow} alt="" className="menu__link-image"/>
        </li>
      </ul>)}
    </div>
  );
}
