import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/main';
import Environmental from './pages/environmental';
import MapPage from './pages/map';
import EventsPage from './pages/events';
import TietoaPage from './pages/tietoa';
import SingleEvent from './pages/events/single-event';

export default function Router() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/environmental" component={Environmental} />
        <Route path="/map" component={MapPage} />
        <Route path="/events" component={EventsPage} />
        <Route path="/tietoa" component={TietoaPage} />
        <Route path="/event/1" component={SingleEvent} />
      </Switch>
    </main>
  );
}
