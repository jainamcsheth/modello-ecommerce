import React from 'react';
import './App.scss';
import Header from './core/Header';

import Home from './components/Home';
import InitialFetch from './core/InitialFetch';

function App() {
  return (
    <div className="body-main">
      <Header />
      <Home />
      <InitialFetch />
    </div>
  );
}

export default App;
