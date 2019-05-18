import React from 'react';
import './style.css';
import Environment from '../../components/envi-graph';

export default function Environmental() {
  return (
    <article className="main_page">
      <section className="weather_environment">
        <div className="environmental">
          <div style={{ background: '#4CAF50' }} className="blocks left">
            “Ympäristön tilaa seurataan Oulujoen suistossa monella eri tavalla.”
          </div>
          <div style={{ background: '#FF5722' }} className="blocks left2">
            “Vedenlaatua seurataan Oulujokisuistossa Tuiran, Kuusisaaren ja
            Nallikarin virallisilla uimarannoilla”
          </div>
          <div className="blocks left3">
            <p> Tuiran uimaranta 20.5.2019</p>

            <p> Lämpötila: 6C</p>
            <p> Escherichia coli: 11 mpn/100ml</p>
            <p> Suolistoperäiset enterokokit: 1 pmy/ml</p>
            <p>Sinilevät: Ei havaittu</p>
            <p>Jätteet: Ei</p>
          </div>
          <div style={{ background: '#2196F3' }} className="blocks right">
            “Vedenlaatu kaikilla jokisuiston uimapaikoilla on ollut kriteerit
            täyttävää viimeisimmissä mittauksissa”
          </div>
          <div style={{ background: '#8BC34A' }} className="blocks right2">
            Water quality chart
          </div>
          <div style={{ background: '#2196F3' }} className="blocks right3">
            <iframe
              id="simppelikuva"
              title="simppelikuva"
              src="http://wwwi2.ymparisto.fi/i2/59/q5904450y/picsimp_q_big.html"
              frameBorder="0"
              scrolling="auto"
              width="100%"
              height="500"
            />
          </div>
          <div className="blocks right4">
            <Environment />
          </div>
        </div>
      </section>
    </article>
  );
}
