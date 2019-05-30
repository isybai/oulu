import React, { useState, useEffect } from 'react';

export default function Map(props) {
  useEffect(() => {
    if (!window.google) {
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://maps.google.com/maps/api/js?key=AIzaSyC4Gm_Z5gpGsvw3cQxpIh2g54Bcy5aZ4B0`;
      let x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(script, x);
      script.addEventListener('load', () => {
        onScriptLoad();
      });
    } else {
      onScriptLoad();
    }
  }, []);

  const onScriptLoad = () => {
    const map = new window.google.maps.Map(
      document.getElementById(props.id),
      props.options
    );
    const infoWindow = new window.google.maps.InfoWindow({
      content: '<div id="infoWindow">asas</div>',
      position: { ...props.options.center }
    });
    infoWindow.open(map);
  };
  return <div className="map" id={props.id} />;
}
