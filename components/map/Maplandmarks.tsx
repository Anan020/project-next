'use client'
import { LayersControl, MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useState } from 'react';



const iconUrl =
  "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png";
const markerIcon = L.icon({
  iconUrl: iconUrl,
  iconSize: [20, 30],
});

type Latlng = [number, number]
type LocationMarkerProps = {
  position: Latlng | null;
  setPosition: (position: Latlng) => void
}

function LocationMarker({ position, setPosition }: LocationMarkerProps) {

  const map = useMapEvents({
    click(e) {
      const newLocation: Latlng = [e.latlng.lat, e.latlng.lng]
      setPosition(newLocation)
      map.flyTo(e.latlng,)
    },

  })

  return position === null ? null : (
    <Marker position={position} icon={markerIcon}>
      <Popup>You are here</Popup>
    </Marker>
  )
}



const MapLandmark = ({ Location }: { Location?: { lat: number; lng: number } }) => {
  const defaultLocation: Latlng = [17.9757, 102.6331]
  const [position, setPosition] = useState <Latlng | null>(null)
  console.log(position)

  return (
    <>
      <h1 className='mt-4 font-semibold'>Where are you?</h1>
      <input
        type='hidden'
        name='lat'
        value={position ? position[0] : ''}
      />
      <input
        type='hidden'
        name='lng'
        value={position ? position[1] : ''}
      />
      
      <MapContainer
        className='h-[50vh] rounded-lg mt-2 z-0 relative mb-4'
        center={Location || defaultLocation}
        zoom={12}
        scrollWheelZoom={false}>

        <Marker position={Location || defaultLocation} icon={markerIcon}>
          <Popup>
            ວຽງຈັນ <br /> ປະເທດລາວ
          </Popup>
        </Marker>
        <LocationMarker position={position} setPosition={setPosition} />

        <LayersControl>
          <LayersControl.BaseLayer name='Openstreetmap' checked>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="ESRI Imagery">
             <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
    </>
  )
}

export default MapLandmark
