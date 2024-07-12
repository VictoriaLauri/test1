import './App.css';
import React from 'react';
import Intro1 from './components/Intro1';
import Nav from './components/Nav';
import Intro3 from './components/Intro3';
import Intro2 from './components/Intro2';
import Promo from './components/Promo';
import Footer from './components/Footer';

function App() {
  return ( 
    <div className="App">
      <header className="app-header">
      <Nav />
      </header>
      <main>
        <Intro1 />
        <Intro2 />
        <Intro3 />
        <Promo />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  ); 
};

export default App;
