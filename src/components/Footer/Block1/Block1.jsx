import React, { useState, useEffect } from 'react';
import './Block1.scss';

export const Block1 = () => {
  const [ modalVisible, setModalVisible] = useState(false);
  const [ query, setQuery ] = useState('');

  const subscribe = (event) => {
    event.preventDefault();
    setModalVisible(true)
  }

  useEffect(()=>{
  
    if(modalVisible){
      setTimeout(()=>
      setModalVisible(false), 2000)
    }
  }, [modalVisible])

  return (
    <div className="footerBlock">
      <div className="footerBlock__title">
        <span className="footerBlock__title-text">Блок 1</span>
      </div>
      <div className="footerBlock__mail">
        <span className="footerBlock__mail-header">Будьте в курсе новостей и новинок!</span>
        <span className="footerBlock__mail-subscribe">Подписывайтесь на рассылку</span>
        <form 
          className="footerBlock__mail-form"
          onSubmit={subscribe}
        >
          <input 
            type="email"
            placeholder="Укажите свой email для подписки"
            className="footerBlock__mail-input"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            value={query}
            onChange={({target})=> setQuery(target.value.trimLeft())}
            required
          />
          <button type="submit" className="footerBlock__mail-button">ПОДПИСАТЬСЯ</button>
        </form>
      </div>
      {modalVisible && (
        <div className="subscribe">
          <h1 className="subscribe-success">
            Поздравляем!
            <br/>
            Вы успешно подписаны на рассылку!
          </h1>
        </div>
      )}
    </div>
  );
}
