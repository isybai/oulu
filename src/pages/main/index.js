import React, { useState, useEffect } from 'react';
import './style.css';
import Environment from '../../components/envi-graph';

export default function MainPage() {
  const [weather, weatherSet] = useState(false);

  async function fetchMyAPI() {
    let data = await fetch(
      'https://openweathermap.org/data/2.5/weather/?appid=b6907d289e10d714a6e88b30761fae22&id=643493&units=metric'
    );
    data = await data.json();
    console.log('data', data);
    return weatherSet(data);
  }

  useEffect(() => {
    fetchMyAPI();
  }, []);
  const weth = weather && weather.weather[0];

  return (
    weather && (
      <article className="main_page">
        <section className="video_container">
          <video className="video" loop autoPlay={true} muted>
            <source src="./video/video.mp4" type="video/mp4" />
          </video>
        </section>
        <section className="block_events">
          <div className="event_container">
            <div className="event event1">
              Research and development <br />
              15-20 June
            </div>
            <div className="event event2">
              The Taste of Oulu
              <br />
              3-7 July
            </div>
            <div className="event event3">
              South Beach Wine & Food Festival
              <br />
              1-10 July
            </div>
          </div>
        </section>
        <section className="weather_environment">
          <div className="api_container">
            <div className="weatherApi">
              <h2 className="weather-title">Weather in Oulu</h2>
              <p className="weather-icon">
                <img
                  alt="Weather in Oulu, FI"
                  src={`https://openweathermap.org/img/w/${weth.icon}.png`}
                />
                {Math.round(weather.main.temp)}°C
              </p>
              <div className="weather-data">
                <div>
                  <p style={{ textTransform: 'capitalize' }}>
                    {weth.description}
                  </p>
                  <p>
                    Clouds: <span>{weather.clouds.all}</span>
                  </p>
                  <p>
                    Humidity: <span>{weather.main.humidity}</span>
                  </p>
                  <p>
                    Pressure: <span>{weather.main.pressure}</span>
                  </p>
                </div>
                <div>
                  <p>
                    Temp min: <span>{weather.main.temp_max}</span>°C
                  </p>
                  <p>
                    Temp max: <span>{weather.main.temp_min}</span>°C
                  </p>
                  <p>
                    Sunrise:{' '}
                    <span>
                      {new Date(
                        weather.sys.sunrise * 1000
                      ).toLocaleTimeString()}
                    </span>
                  </p>
                  <p>
                    Sunset:{' '}
                    <span>
                      {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="environment">
              <Environment />
            </div>
          </div>
        </section>
        <section className="adv_container">
          <div className="adv_item">AD1</div>
          <div className="adv_item">AD2</div>
        </section>
      </article>
    )
  );
}
