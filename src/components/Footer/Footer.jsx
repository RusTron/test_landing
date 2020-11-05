import React from 'react';
import { Block1 } from './Block1';
import { LinksBlock } from './LinksBlock';
import { LogoBlock } from './LogoBlock';
import './Footer.scss';

export const Footer = () => {
  return (
    <div className="App__footer">
      <footer className="footer">
        <div className="footer__header">
          <Block1 />
          <LinksBlock />
        </div>
        <LogoBlock />
      </footer>
    </div>
  )
}
