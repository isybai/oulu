import React, { Component } from 'react';
import './style.css';

export default class SingleEvent extends Component {
  render() {
    return (
      <div className="single_event">
        <div className="banner">
          <h1>INDUSTRY SUMMIT 14–15 JUNE 2019!</h1>
        </div>
        <div className="event_content">
          <h2>Subtitle</h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          atque commodi consequatur consequuntur dignissimos dolore eligendi
          enim fuga illum itaque magni numquam quam quas qui quia suscipit,
          velit veniam veritatis.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          atque commodi consequatur consequuntur dignissimos dolore eligendi
          enim fuga illum itaque magni numquam quam quas qui quia suscipit,
          velit veniam veritatis.
        </div>
      </div>
    );
  }
}
