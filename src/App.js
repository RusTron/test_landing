import React from 'react';
import { Header } from './components/Header';
import { Info } from './components/Info';
import { Select } from './components/Select';
import { Cards } from './components/Cards';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Info />
        <Select />
        <Cards />
      </main>
    </div>
  );
}

export default App;
