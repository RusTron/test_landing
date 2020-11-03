import React, { useState } from 'react';
import { SelectBlock__Header } from './SelectBlock__Header';
import classNames from 'classnames';
import x from '../../../images/icons/x.png';
import './SelectBlock.scss';

export const SelectBlock = () => {
  const [ activeTab, setActiveTab ] = useState('Tab 2');
  const [ firstPrice, setFirstPrice ] = useState('');
  const [ secondPrice, setSecondPrice ] = useState('');

  const setLowerValue = ({target}) => {
    if(!/\D/g.test(target.value)) setFirstPrice(target.value);
  }

  const setHigherValue = ({target}) => {
    if(!/\D/g.test(target.value)) setSecondPrice(target.value);
  }

  const submitForm = (event) => {
    event.preventDefault();

    if(event.nativeEvent.submitter.className.includes('filter')){
      clearFilter(event);
    }
  }

  const clearFilter = (event) => {
    for(let i=0; i < 5; i++){

      const current = event.currentTarget[i].tagName;

      if(current === 'SELECT') {
        event.currentTarget[i].value = 'Select 1'
      } 
    }

    setFirstPrice('');
    setSecondPrice('');
  }

  return (
    <div className="selectBlock">
      <SelectBlock__Header />
      <form className="selectBlock__body selects" onSubmit={submitForm}>
        <div className="selects__row row1">
          <div
            className={classNames("row1__tab", {"activeTab": activeTab === "Tab 1"})}
            onClick={({target})=> setActiveTab(target.innerText)}
          >
            Tab 1
          </div>
          <div 
            className={classNames("row1__tab", {"activeTab": activeTab === "Tab 2"})}
            onClick={({target})=> setActiveTab(target.innerText)}
          >
            Tab 2
          </div>
        </div>
        <div className="selects__row row2">
          <select 
            name="select1" id="select1" className="row2__select selectField">
            <option value="Select 1" className="selectField-option">Select 1</option>
            <option value="Select 2" className="selectField-option">Select 2</option>
            <option value="Select 3" className="selectField-option">Select 3</option>
            <option value="Select 4" className="selectField-option">Select 4</option>
            <option value="Select 5" className="selectField-option">Select 5</option>
            <option value="Select 6" className="selectField-option">Select 6</option>
          </select>
          <select
            name="select2"
            id="select2"
            className="row2__select selectField"
          >
            <option value="Select 1" className="selectField-option">Select 1</option>
            <option value="Select 2" className="selectField-option">Select 2</option>
            <option value="Select 3" className="selectField-option">Select 3</option>
            <option value="Select 4" className="selectField-option">Select 4</option>
            <option value="Select 5" className="selectField-option">Select 5</option>
            <option value="Select 6" className="selectField-option">Select 6</option>
          </select>
          <select
            name="select3"
            id="select3"
            className="row2__select selectField"
          >
            <option value="Select 1" className="selectField-option">Select 1</option>
            <option value="Select 2" className="selectField-option">Select 2</option>
            <option value="Select 3" className="selectField-option">Select 3</option>
            <option value="Select 4" className="selectField-option">Select 4</option>
            <option value="Select 5" className="selectField-option">Select 5</option>
            <option value="Select 6" className="selectField-option">Select 6</option>
          </select>
          <select
            name="select4"
            id="select4"
            className="row2__select selectField"
          >
            <option value="Select 1" className="selectField-option">Select 1</option>
            <option value="Select 2" className="selectField-option">Select 2</option>
            <option value="Select 3" className="selectField-option">Select 3</option>
            <option value="Select 4" className="selectField-option">Select 4</option>
            <option value="Select 5" className="selectField-option">Select 5</option>
            <option value="Select 6" className="selectField-option">Select 6</option>
          </select>
        </div>
        <div className="selects__row row3">
        <select
            name="select5"
            id="select5"
            className="row3__select selectField"
          >
            <option value="Select 1" className="selectField-option">Select 1</option>
            <option value="Select 2" className="selectField-option">Select 2</option>
            <option value="Select 3" className="selectField-option">Select 3</option>
            <option value="Select 4" className="selectField-option">Select 4</option>
            <option value="Select 5" className="selectField-option">Select 5</option>
            <option value="Select 6" className="selectField-option">Select 6</option>
          </select>
          <div className="price">
            <span className="price-text">Цена</span>
            <input 
              type="text"
              className="price-input"
              value={firstPrice}
              onChange={setLowerValue}
            />
            <input 
              type="text"
              className="price-input"
              value={secondPrice}
              onChange={setHigherValue}
            />
          </div>
        </div>
        <div className="selects__row row4">
          <button className="row4__filter" type="submit">
            <img src={x} alt="clear-form" className="row4__filter-image"/>
            <span className="row4__filter-text">Очистить фильтр</span>
          </button>
          <button type="submit" className="row4__button">
            <span className="row4__button-text">ПРИМЕНИТЬ ФИЛЬТР</span>
          </button>
        </div>
      </form>
    </div>
  )
}
