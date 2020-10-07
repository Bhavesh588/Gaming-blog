import React from 'react';
import './App.scss';
import Header from './component/Header/Header';
import Homepage from './Pages/Homepage/Homepage';

function App() {
  return (
    <div className="app">
      <Header />
      <Homepage />
    </div>
  );
}

export default App;
