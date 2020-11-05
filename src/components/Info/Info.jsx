import React, { useState, useEffect } from 'react';
import NumberFormat from 'react-number-format';
import logo from '../../images/Test.png';
import phone from '../../images/icons/phone-icon.png';
import compare from '../../images/icons/compare.png';
import selected from '../../images/icons/selected.png';
import basket from '../../images/icons/basket.png';
import basketAmount from '../../images/icons/basket-amount.png';
import './Info.scss';

export const Info = () => {
  const [ query, setQuery ] = useState('');
  const [ modalVisible, setModalVisible ] = useState(false);
  const [error, setError] = useState(false)

  const addText = (value) => {
    if(error){
      setError(false);
    }
  
    setQuery(value);
  }

  const sendForm = (event) => {
    event.preventDefault();

    if(query.length !== 10){
      setError(true);
      return;
    }

    setModalVisible(false);
    setQuery('');
  }

  useEffect(() => {
    const handleEsc = (event) => {
       if (event.keyCode === 27) {
        setModalVisible(false);
        setQuery('')
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <div className="info">
      <div className="info__logo">
        <img src={logo} alt="info__logo" className="info__logo-item"/>
      </div>
      <div className="info__contacts">
        <div className="info__contacts-numbers">
          <a href="tel: +380 98 170 00 740" className="info__contacts-number">+380 98 170 00 740</a>
          <a href="tel: +380 98 170 00 740" className="info__contacts-number">+380 98 170 00 740</a>
        </div>
        <button 
          className="info__contacts-button button"
          onClick={()=> setModalVisible(true)}
        >
          <img src={phone} alt="call-icon" className="button-icon"/>
          <span className="button-text">ПЕРЕЗВОНИТЬ МНЕ</span>
        </button>
        {modalVisible && (<div className="call">
          <form 
            action="#"
            method="post"
            class="call__form"
            onSubmit={(event) => sendForm(event, query)}
          >
            <NumberFormat
              format="+38 (###) ###-####" 
              mask="_"
              className="call__form-input"
              placeholder="Введите номер"
              value={query}
              onValueChange={({value})=> addText(value)}
              required
            />
            {error && (
              <span className="call__form-error">
                Номер телефона должен содержать минимум 10 символов
              </span>
            )}
            <button type="submit" className="call-submit">
              Перезвонить мне
            </button>
          </form>
        </div>)}
      </div>
      <div className="info__chosenGoods">
        <div className="info__chosenGoods-item">
          <img src={compare} alt="" className="info__chosenGoods-image"/>
          <span className="info__chosenGoods-text">СРАВНЕНИЕ</span>
        </div>
        <div className="info__chosenGoods-item">
          <img src={selected} alt="" className="info__chosenGoods-image"/>
          <span className="info__chosenGoods-text">ИЗБРАННОЕ</span>
        </div>
        <div className="info__chosenGoods-item">
          <span className="info__chosenGoods-amount">5</span>
          <img src={basketAmount} alt="" className="info__chosenGoods-icon"/>
          <img src={basket} alt="" className="info__chosenGoods-image"/>
          <span className="info__chosenGoods-text">КОРЗИНА</span>
        </div>
      </div>
    </div>
  );
}
