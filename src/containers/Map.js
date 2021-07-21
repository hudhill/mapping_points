import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'; // for a custom icon
import * as spotData from "../data/fave-spots.json";
   
const Map = () => {

  const [activeSpot, setActiveSpot] = React.useState(null);

  const icon = new Icon({ // for making a custom icon
    iconUrl: "url", //needs a url
    iconSize: [25, 25]
  });

  return (
  // in the MapContainer initialize view, level of zoom, and whether or not you can scroll
  <MapContainer center={[55.947, -3.1618]} zoom={15} scrollWheelZoom={false}>
    
    <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    {spotData.faveSpots.map(
      spot => {
        return (
          <Marker 
            key={spot.id} 
            position={[
              spot.coordinates[0], spot.coordinates[1]
            ]}
            onClick={() => {
              setActiveSpot(spot);
            }}
          />
        )
      }
    )}

    {activeSpot && (
      <Popup
        position={[
          activeSpot.coordinates[0], activeSpot.coordinates[1]
        ]}
        onClose={() => {
          setActiveSpot(null);
        }}
      >
        <div>
          <h2>{activeSpot.name}</h2>
          <p>{activeSpot.coordinates}</p>
        </div>
      </Popup>
    )}

  </MapContainer>
  )

}

export default Map;