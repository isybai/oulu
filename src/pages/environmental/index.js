import React from 'react';
import './style.css';
import { WaterQuality, WaterFlow } from '../../components/water-api';

export default function Environmental() {
  return (
    <article className="main_page">
      <section className="weather_environment">
        <div className="environmental">
          <div className="grid-row-2">
            <div className="bg-beach centered-text">
              Ympäristön tilaa seurataan Oulujoen suistossa monella eri tavalla.
            </div>
            <div className="right">
              <p className="title">
                Vedenlaatu kaikilla jokisuiston uimapaikoilla on ollut kriteerit
                täyttävää viimeisimmissä mittauksissa
              </p>
              <div>
                <WaterFlow />
              </div>
            </div>
          </div>
          <div className="grid-row-2">
            <div className="left">
              <p className="title">
                Vedenlaatua seurataan Oulujokisuistossa Tuiran, Kuusisaaren ja
                Nallikarin virallisilla uimarannoilla
              </p>
              <div>
                <WaterQuality />
              </div>
            </div>
            <div className="right bg-ilta centered-text">
              <p> Tuiran uimaranta 20.5.2019</p>
              <p> Lämpötila: 6C</p>
              <p> Escherichia coli: 11 mpn/100ml</p>
              <p> Suolistoperäiset enterokokit: 1 pmy/ml</p>
              <p> Sinilevät: Ei havaittu</p>
              <p> Jätteet: Ei</p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
