import React from 'react';
import { Menu } from './Menu';
import { SearchBar } from './SearchBar';
import './Select.scss';

export const Select = () => {
  return (
    <div className="select">
      <Menu />
      <div className="select-block">
        <SearchBar />
      </div>
    </div>
  )
}
