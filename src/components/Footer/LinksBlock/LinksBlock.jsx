import React from 'react';
import { NavLink } from 'react-router-dom';
import './LinksBlock.scss';

export const LinksBlock = () => {
  return(
    <div className="footerLinks">
      <div className="footerLinks__block">
        <div className="footerBlock__title">
          <span className="footerBlock__title-text">Блок ссылок 1</span>
        </div>
        <ul className="footerLinks__block-list">
          <li className="footerLinks__block-item">
            <NavLink
              to={'/link1'}
              className={'footerLinks__block-link'}
            >
              Ссылка 1
            </NavLink>
          </li>
          <li className="footerLinks__block-item">
            <NavLink
              to={'/link2'}
              className={'footerLinks__block-link'}
            >
              Ссылка 2
            </NavLink>
          </li>
          <li className="footerLinks__block-item">
            <NavLink
              to={'/link3'}
              className={'footerLinks__block-link'}
            >
              Ссылка 3
            </NavLink>
          </li>
          <li className="footerLinks__block-item">
            <NavLink
              to={'/link4'}
              className={'footerLinks__block-link'}
            >
              Ссылка 4
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="footerLinks__block">
        <div className="footerBlock__title">
          <span className="footerBlock__title-text">Блок 2</span>
        </div>
        <ul className="footerLinks__block-list">
          <li className="footerLinks__block-item">
            <NavLink
              to={'/link1'}
              className={'footerLinks__block-link'}
            >
              Ссылка 1
            </NavLink>
          </li>
          <li className="footerLinks__block-item">
            <NavLink
              to={'/link2'}
              className={'footerLinks__block-link'}
            >
              Ссылка 2
            </NavLink>
          </li>
          <li className="footerLinks__block-item">
            <NavLink
              to={'/link3'}
              className={'footerLinks__block-link'}
            >
              Ссылка 3
            </NavLink>
          </li>
          <li className="footerLinks__block-item">
            <NavLink
              to={'/link4'}
              className={'footerLinks__block-link'}
            >
              Ссылка 4
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="footerLinks__block">
        <div className="footerBlock__title">
          <span className="footerBlock__title-text">Блок ссылок 3</span>
        </div>
        <ul className="footerLinks__block-list">
          <li className="footerLinks__block-item">
            <NavLink
              to={'/link1'}
              className={'footerLinks__block-link'}
            >
              Ссылка 1
            </NavLink>
          </li>
          <li className="footerLinks__block-item">
            <NavLink
              to={'/link2'}
              className={'footerLinks__block-link'}
            >
              Ссылка 2
            </NavLink>
          </li>
          <li className="footerLinks__block-item">
            <NavLink
              to={'/link3'}
              className={'footerLinks__block-link'}
            >
              Ссылка 3
            </NavLink>
          </li>
          <li className="footerLinks__block-item">
            <NavLink
              to={'/link4'}
              className={'footerLinks__block-link'}
            >
              Ссылка 4
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}
