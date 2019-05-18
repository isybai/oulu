import React from 'react';
import Router from './Router';
import Menu from './components/menu/';
import Footer from './components/footer/';
import './App.css';

export default function App() {
  return (
    <main className="App">
      <Menu />
      <article className="content">
        <Router />
      </article>
      <Footer />
    </main>
  );
}
