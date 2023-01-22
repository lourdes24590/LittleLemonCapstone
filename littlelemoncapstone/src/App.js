import './App.css';
import React from 'react';
import Footer from './Footer.js';
import Main from './Main.js';
import Nav from './Nav.js';
import Header from './Header.js';

function App() {
  return (
    <React.Fragment>
      <body>
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
      </body>
    </React.Fragment>
  );
}

export default App;

