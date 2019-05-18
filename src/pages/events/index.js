import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function EventsPage() {
  return (
    <article className="events_page">
      <section className="event_banner">
        <Link to="/event/1">
          <div className="active_event block">
            Research and development <br />
            EVENT TIME: 15-20 June 2019
          </div>
        </Link>
        <div className="block">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          animi aperiam architecto consequatur eum ex explicabo fugiat nam nemo
          nihil, omnis.
        </div>
      </section>
      <section className="events">
        <div className="event_card event2">
          The Taste of Oulu
          <br />
          3-7 July
        </div>
        <div className="event_card event3">
          South Beach Wine & Food Festival
          <br />
          1-10 July
        </div>
        <div className="event_card event6">
          Conference on Communication Technologies and Networks
          <br />
          21-22 July
        </div>
        <div className="event_card">Next event 4</div>
        <div className="event_card">Next event 5</div>
        <div className="event_card">Next event 6</div>
        <div className="event_card">Next event 7</div>
        <div className="event_card">Next event 8</div>
        <div className="event_card">Next event 9</div>
      </section>
    </article>
  );
}
