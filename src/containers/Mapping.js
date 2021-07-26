import faveSpots from "../data/fave-spots";
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'; // for a custom icon
   
const Mapping = () => {

  const icon = new Icon({ // for making a custom icon
    iconUrl: "url", //needs a url
    iconSize: [25, 25]
  });

  const toggleCollapse = () => {
    const collapsible = document.getElementById("collapsible");
    collapsible.classList.toggle("collapsed")
  }

  return (
  // in the MapContainer initialize view, level of zoom, and whether or not you can scroll
  <MapContainer 
    center={[55.946, -3.1618]} 
    zoom={15} 
    scrollWheelZoom={false}
  >
    
    <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    {faveSpots.map(
      spot => {
        return (
          <Marker 
            key={spot.id} 
            name={spot.name}
            position={spot.coordinates}
          >
            <Popup>
              <button onClick={toggleCollapse} className="spot">
                <h3>{spot.name}</h3>
                <p>{spot.coordinates}</p>
                <p id="collapsible" className="collapsed">{spot.description}</p>
              </button>
            </Popup>
          </Marker>
        )
      }
    )}

  </MapContainer>
  )

}

export default Mapping;