import React from 'react';
import './App.scss';
import Header from './component/Header/Header';
import Homepage from './Pages/Homepage/Homepage';
import Newsletter from './component/Newsletter/Newsletter';
import Footer from './component/Footer/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <Homepage />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
