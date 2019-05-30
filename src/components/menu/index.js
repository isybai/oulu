import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const is_mobile = window.innerWidth < 700;

export default function Menu() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <header className="menu">
        <button
          className={menuActive ? 'nav_icon active' : 'nav_icon'}
          onClick={() => setMenuActive(!menuActive)}
        >
          <span />
          <span />
          <span />
        </button>
        <a className="logo" href="/">
          LOGO
        </a>
        <nav className={menuActive ? 'navigation active' : 'navigation'}>
          <Link to="/" className="menu_item">
            Etusivu
          </Link>
          <Link to="/environmental" className="menu_item">
            Ympäristötietoa
          </Link>
          <Link to="/map" className="menu_item">
            Kartta
          </Link>
          <Link to="/events" className="menu_item">
            Tapahtumat
          </Link>
          <Link to="/tietoa" className="menu_item">
            Tietoa
          </Link>
        </nav>
        {is_mobile && menuActive && (
          <div
            onClick={() => setMenuActive(false)}
            className="mobile_overlay"
          />
        )}
      </header>
    </>
  );
}
