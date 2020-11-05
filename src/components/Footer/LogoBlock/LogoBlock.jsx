import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/Test-grey.png';
import vk from '../../../images/icons/vk.png';
import facebook from '../../../images/icons/facebook.png';
import twitter from '../../../images/icons/twitter.png';
import youtube from '../../../images/icons/youtube.png';
import wezom from '../../../images/icons/wezom.png';
import './LogoBlock.scss';

export const LogoBlock = () => {
  return(
    <div className="logoBlock">
      <div className="logoBlock__logo">
        <div className="logoBlock__logo-image">
          <img src={logo} alt="" className="LogoBlock__logo-image"/>
        </div>
        <span className="logoBlock__logo-copyrith">
          © Copyrith 2017. Тестовое задание Wezom
        </span>
      </div>
      <div className="logoBlock__social">
        <div className="logoBlock__social-frame">
          <img src={vk} alt="" className="logoBlock__social-icon"/>
        </div>
        <div className="logoBlock__social-frame">
          <img src={facebook} alt="" className="logoBlock__social-icon"/>
        </div>
        <div className="logoBlock__social-frame">
          <img src={twitter} alt="" className="logoBlock__social-icon"/>
        </div>
        <div className="logoBlock__social-frame activeFrame">
          <img src={youtube} alt="" className="logoBlock__social-icon"/>
        </div>
      </div>
      <div className="logoBlock__wezom">
        <div className="logoBlock__wezom-logo">
          <a href="https://wezom.com.ua/">
            <img src={wezom} alt="" className="logoBlock__wezom-image"/>
          </a>
        </div>
        <div className="logoBlock__wezom-description">
          <span className="logoBlock__wezom-title">Разработка тестового</span>
          <span className="logoBlock__wezom-agency">Wezom Agency</span>
        </div>
      </div>
    </div>
  )
}