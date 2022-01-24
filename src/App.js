// import logo from './logo.svg';
// import "./App.css";
import React from 'react';
import './scss/app.scss';
import { Header } from './components/header';
import { Body } from './components/body';
import { Footer } from './components/footer';

function App() {
  return (
    <div class="container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
