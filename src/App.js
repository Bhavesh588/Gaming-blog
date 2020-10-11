import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Homepage from './Pages/Homepage/Homepage';
import Games from './Pages/Games/Games';
import Contact from './Pages/Contact/Contact';
import BlogNews from './Pages/BlogNews/BlogNews';

import Header from './component/Header/Header';
import Newsletter from './component/Newsletter/Newsletter';
import Footer from './component/Footer/Footer';

function App() {
  AOS.init({
    offset: 200,
    duration: 200,
    easing: 'ease-in-sine',
    delay: 100,
});
  return (
    <div className="app">
      <Router>

        <Header />

        <Switch>
          
          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/blognews">
            <BlogNews />
          </Route>

          <Route path="/games">
            <Games />
          </Route>

          <Route path="/">
            <Homepage />
          </Route>

        </Switch>
        
        <Newsletter />
        <Footer />

      </Router>
    </div>
  );
}

export default App;
