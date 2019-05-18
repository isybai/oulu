import React from 'react';
import './style.css';

export default function TietoaPage() {
  return (
    <article className="tietoa_page">
      <section className="banner">
      Tällä sivulla on tietoa portaalin toiminnan tarkoituksesta,
        rahoittajista, ylläpidosta, sekä mahdolliset yhteystiedot palautetta
        varten ja niin edelleen.
      </section>
      <section className="logo_container">
        <ul className="logos">
          <li className="item_logo tietoa1" />
          <li className="item_logo tietoa2" />
          <li className="item_logo tietoa3" />
          <li className="item_logo tietoa4" />
        </ul>
      </section>
    </article>
  );
}
