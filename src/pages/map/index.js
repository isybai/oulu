import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import './style.css';

const today = new Date();
const year = today.getFullYear();
let month = today.getMonth() + 1;
month = month < 10 ? '0' + month : month;
const day = today.getDate();
const hour = today.getHours() - 4;
const sec = today.getSeconds();
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
      <div style={{ height: '100%', width: '100%' }}>
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

export default function MapPage() {
  const [center, setCenter] = useState({
    lat: 65.018894,
    lng: 25.478051
  });
  const [section, setSection] = useState(0);
  return (
    <article className="map_page">
      <section className="sections">
        <ul>
          <p onClick={() => setSection(1)}>Section1 (Kiinnostavia kohteita)</p>
          {section === 1 && (
            <>
              <li onClick={() => setCenter({ lat: 65.018894, lng: 25.478051 })}>
                Leikkipaikka lapsille{' '}
              </li>
              <li onClick={() => setCenter({ lat: 65.018255, lng: 25.47111 })}>
                Lammassaari
              </li>
              <li onClick={() => setCenter({ lat: 65.017538, lng: 25.476974 })}>
                Hieno patsas
              </li>
            </>
          )}
          <p onClick={() => setSection(2)}>Section2 (Lenkkeilyreitti)</p>
          {section === 2 && (
            <>
              <li onClick={() => setCenter({ lat: 65.020635, lng: 25.488081 })}>
                Step 1
              </li>
              <li onClick={() => setCenter({ lat: 65.023083, lng: 25.495948 })}>
                Step 2
              </li>
              <li onClick={() => setCenter({ lat: 65.022928, lng: 25.48193 })}>
                Step 3
              </li>
              <li onClick={() => setCenter({ lat: 65.020635, lng: 25.488081 })}>
                Go back
              </li>
            </>
          )}
        </ul>

        <div id="map">
          <SimpleMap center={center} setCenter={cen => setCenter(...cen)} />
        </div>
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
