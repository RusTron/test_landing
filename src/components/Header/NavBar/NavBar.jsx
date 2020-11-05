import React, { useState, useEffect} from 'react';
import {  NavLink } from 'react-router-dom';
import enter from '../../../images/icons/Enter.png'
import './NavBar.scss';

export const NavBar = () => {
  const [ query, setQuery ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ modalVisible, setModalVisible ] = useState(false);
  const [error, setError ] = useState('')

  const sendForm = (event) => {
    event.preventDefault();
    if(password.length < 4) {
      setError(true);
      return;
    }

    setModalVisible(false);
    setPassword('');
    setQuery('');
  }

  const enterPassword = (value) => {
    if(error) setError(false);

    setPassword(value)
  }

  useEffect(() => {
    const handleEsc = (event) => {
       if (event.keyCode === 27) {
        setModalVisible(false)
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list-item">
            <NavLink 
              to={'/'}
              exact={true}
              className={'nav__list-link'}
              activeClassName={'nav__active-link'}
            >
              ГЛАВНАЯ
            </NavLink>
          </li>
          <li className="nav__list-item">
            <NavLink 
              to={'/company'}
              className={'nav__list-link'}
              activeClassName={'nav__active-link'}
            >
              О КОМПАНИИ
            </NavLink>
          </li>
          <li className="nav__list-item">
            <NavLink 
              to={'/link1'}
              className={'nav__list-link'}
              activeClassName={'nav__active-link'}
            >
              ССЫЛКА 1
            </NavLink>
          </li>
          <li className="nav__list-item">
            <NavLink 
              to={'/link2'}
              className={'nav__list-link'}
              activeClassName={'nav__active-link'}
            >
              ССЫЛКА 2
            </NavLink>
          </li>
          <li className="nav__list-item">
            <NavLink 
              to={'/link3'}
              className={'nav__list-link'}
              activeClassName={'nav__active-link'}
            >
              ССЫЛКА 3
            </NavLink>
          </li>
        </ul>
        <button 
          className="nav__button"
          onClick={()=>setModalVisible(true)}
        >
          <img className="nav__button-icon" src={enter} alt="sign-in"/>
          <span className="nav__button-text">ВХОД</span>
        </button>
      </nav>
      {modalVisible && (
        <div className={'login'}>
          <form 
            className="login__form"
            onSubmit={(event)=>sendForm(event)}
            >
            <div className="login__form-input">
              <input
                type="text"
                name="username"
                className="login__form-text"
                placeholder="Введите логин"
                value={query}
                onChange={({target})=> setQuery(target.value.trimLeft())}
                required
              />
            </div>
            <div className="login__form-input">
              <input
                type="password"
                name="password"
                placeholder="Введите пароль"
                className="login__form-password"
                value={password}
                onChange={({target})=>enterPassword(target.value.trimLeft())}
                required
              />
              {error && (
                <span className="login__form-error">Введите минимум 4 символа</span>
              )}
              </div>
            <input 
              class="login__form-input login-submit"
              type="submit"
              name="submit"
              value="ВОЙТИ"
            />
          </form>
        </div>
      )}
    </>
  );
}
