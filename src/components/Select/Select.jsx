import React from 'react';
import { Menu } from './Menu';
import { SearchBar } from './SearchBar';
import { SelectBlock } from './SelectBlock';
import './Select.scss';

export const Select = () => {
  return (
    <div className="select">
      <Menu />
      <div className="select-block">
        <SearchBar />
        <SelectBlock />
      </div>
    </div>
  )
}
