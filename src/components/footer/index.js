import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function Environmental() {
  return (
    <footer className="footer">
      <div className="overlay" />
      <section className="contact_info">
        <div className="contacts">
          <h2>CONTACT INFORMATION</h2>
          <ul>
            <li>YHTEYSTIEDOT Osoitekatu 1 A, 90000, Oulu,</li>
            <li>(08) 123 456 78</li>
            <li>info@portal.com</li>
          </ul>
        </div>
        <div className="description">
          <h2>EXAMPLE.COM</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, beatae
            eos expedita illum ipsam quidem repudiandae vitae voluptas?
            Architecto earum, ex fuga harum ipsa laudantium magni molestiae
            nostrum odio suscipit.
          </p>
        </div>
      </section>
      <section className="footer_links">
        <a className="logo" href="/">
          LOGO
        </a>
        <nav>
          <ul>
            <li>
              <Link to="/" className="menu_item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/environmental" className="menu_item">
                Environmental Info
              </Link>
            </li>
            <li>
              {' '}
              <Link to="/map" className="menu_item">
                Map
              </Link>
            </li>
            <li>
              {' '}
              <Link to="/events" className="menu_item">
                Events
              </Link>
            </li>
            <li>
              <Link to="/tietoa" className="menu_item">
                Tietoa
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
}
