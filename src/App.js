import React from 'react';
import { Header } from './components/Header';
import { Info } from './components/Info';
import { Select } from './components/Select';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Info />
        <Select />
      </main>
    </div>
  );
}

export default App;
