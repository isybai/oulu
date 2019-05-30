import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import './style.css';
import Map from '../../components/map';

const today = new Date();
const year = today.getFullYear();
let month = today.getMonth() + 1;
month = month < 10 ? '0' + month : month;
const day = today.getDate();
const hour = today.getHours() - 4;
// const sec = today.getSeconds();
const imageId = `${year}${month}${day}${hour}${18}`;

const AnyReactComponent = ({ sec, setCenter }) => (
  <div
    // onClick={() => setCenter({ lat: sec.lat, lng: sec.lng })}
    className={`marker ${sec.class ? sec.class : ''}`}
  >
    {sec.text}
  </div>
);

let section1 = [
  { lat: 65.018894, lng: 25.478051, text: 'Leikkipaikka lapsille' },
  { lat: 65.018255, lng: 25.47111, text: 'Lammassaari' },
  { lat: 65.017538, lng: 25.476974, text: 'Hieno patsas' },
  { lat: 65.020635, lng: 25.488081, text: 'Step 1', class: 'step' },
  { lat: 65.023083, lng: 25.495948, text: 'Step 2', class: 'step' },
  { lat: 65.022928, lng: 25.48193, text: 'Step 3', class: 'step' }
];
class SimpleMap extends React.Component {
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '500px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC4Gm_Z5gpGsvw3cQxpIh2g54Bcy5aZ4B0' }}
          center={this.props.center}
          defaultZoom={16}
        >
          {section1.map(sec => (
            <AnyReactComponent
              key={sec.lat}
              lat={sec.lat}
              lng={sec.lng}
              sec={sec}
              setCenter={this.props.setCenter}
            />
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}
const descriptions = {
  desc1: 'Kulje suoraan sinne tai tänne ja käänny tuohon suuntaan',
  desc2:
    'Varo pyöräilijöitä ja muista, että Oulussa vesi on kylmää ympäri vuoden',
  desc3: 'Hyvät maisemat tässä paikassa, pysy polulla'
};

export default function MapPage() {
  const [center, setCenter] = useState({
    lat: 65.018894,
    lng: 25.478051
  });
  const [section, setSection] = useState('');
  const [sectionDesc, setSectionDesc] = useState('');
  return (
    <article className="map_page">
      <section className="sections">
        <div>
          <ul>
            <p onClick={() => setSection('first_section')}>
              Kiinnostavia kohteita
            </p>
            {section === 'first_section' && (
              <>
                <li
                  onClick={() => setCenter({ lat: 65.018894, lng: 25.478051 })}
                >
                  Leikkipaikka lapsille{' '}
                </li>
                <li
                  onClick={() => setCenter({ lat: 65.018255, lng: 25.47111 })}
                >
                  Lammassaari
                </li>
                <li
                  onClick={() => setCenter({ lat: 65.017538, lng: 25.476974 })}
                >
                  Hieno patsas
                </li>
              </>
            )}
            <p onClick={() => setSection('second_section')}>Lenkkeilyreitti</p>
            {section === 'second_section' && (
              <>
                <li
                  onClick={() => {
                    setCenter({ lat: 65.020635, lng: 25.488081 });
                    setSectionDesc(descriptions.desc1);
                  }}
                >
                  Step 1
                </li>
                <li
                  onClick={() => {
                    setCenter({ lat: 65.023083, lng: 25.495948 });
                    setSectionDesc(descriptions.desc2);
                  }}
                >
                  Step 2
                </li>
                <li
                  onClick={() => {
                    setCenter({ lat: 65.022928, lng: 25.48193 });
                    setSectionDesc(descriptions.desc3);
                  }}
                >
                  Step 3
                </li>
              </>
            )}
          </ul>
          {sectionDesc && section === 'second_section' && (
            <div className="map-desc">{sectionDesc}</div>
          )}
        </div>
        {/* #TODO need to finish this complex task with custom map blyat suka
        <Map
          id="myMap"
          options={{
            center: { lat: center.lat, lng: center.lng },
            zoom: 16
          }}
        />
        */}
        <SimpleMap center={center} setCenter={cen => setCenter(...cen)} />
      </section>
      <section className="map_video_container">
        <div className="map_video">
          <img
            src="http://www.oulunkaupunki.fi/_private/kamera/picture1.jpg"
            alt=""
          />
        </div>
        <div className="map_video">
          <img
            src={`https://liikennetilanne.tmfg.fi/tilannekuvawsproxy?imageId=C1251300${imageId}`}
            alt=""
          />
        </div>
        <div className="map_video">
          <img
            src={`https://liikennetilanne.tmfg.fi/tilannekuvawsproxy?imageId=C1251300${imageId}`}
            alt=""
          />
        </div>
        <div className="map_video">
          <img
            src="http://www.oulunkaupunki.fi/_private/kamera/picture1.jpg"
            alt=""
          />
        </div>
      </section>
    </article>
  );
}
