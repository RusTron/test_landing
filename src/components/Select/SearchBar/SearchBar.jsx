import React, { useState } from 'react';
import './SearchBar.scss';

export const SearchBar = () => {
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');

  const findItem = (e) => {
    e.preventDefault();
    if(query.length < 2  && e) {
      setError(true);

      return;
    } 
  }

  const setSearchValue = (value) => {
    if(error) setError(false);

    setQuery(value)
  }

  return (
    <div className="search">
      <form 
        className="search__form"
        onSubmit={findItem}
      >
        <input 
          type="search"
          className="search__form-input"
          placeholder="Поиск по сайту"
          value={query}
          onChange={({target})=>setSearchValue(target.value.trimLeft())}
        />
        {error && (
          <span className="search__form-error">Введите минимум 2 символа</span>
        )}
        <select 
          name="searchBar"
          id="searchBar"
          className="search__form-select"
        >
          <option value="Все категории">Все категории</option>
          <option value="Опция 1">Опция 1</option>
          <option value="Опция 2">Опция 2</option>
          <option value="Опция 3">Опция 3</option>
        </select>
        <button type="submit" className="search__form-submit">Поиск</button>
      </form>
    </div>
  );
}
