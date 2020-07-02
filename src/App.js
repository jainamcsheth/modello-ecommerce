import React from 'react';
import './App.scss';
import Header from './core/Header';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Home from './components/Home';
import InitialFetch from './core/InitialFetch';

library.add(faUser)

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
