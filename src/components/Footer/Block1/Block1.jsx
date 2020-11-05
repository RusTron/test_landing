import React from 'react';
import './Block1.scss';

export const Block1 = () => {
  return (
    <div className="footerBlock">
      <div className="footerBlock__title">
        <span className="footerBlock__title-text">Блок 1</span>
      </div>
      <div className="footerBlock__mail">
        <span className="footerBlock__mail-header">Будьте в курсе новостей и новинок!</span>
        <span className="footerBlock__mail-subscribe">Подписывайтесь на рассылку</span>
        <form action="" className="footerBlock__mail-form">
          <input 
            type="email"
            placeholder="Укажите свой email для подписки"
            className="footerBlock__mail-input"
            required
          />
          <button type="submit" className="footerBlock__mail-button">ПОДПИСАТЬСЯ</button>
        </form>
      </div>
    </div>
  );
}
