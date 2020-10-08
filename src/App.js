import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './component/Header/Header';
import Homepage from './Pages/Homepage/Homepage';
import Games from './Pages/Games/Games';
import Contact from './Pages/Contact/Contact';
import Newsletter from './component/Newsletter/Newsletter';
import Footer from './component/Footer/Footer'

function App() {
  return (
    <div className="app">
      <Router>

        <Header />

        <Switch>
          
          <Route path="/contact">
            <Contact />
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
