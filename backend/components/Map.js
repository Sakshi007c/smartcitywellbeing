import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useEffect } from 'react'
import L from 'leaflet'

// Fix default icon path issues in next.js / webpack
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

export default function Map() {
  return (
    <MapContainer center={[28.6139,77.2090]} zoom={12} style={{height: '100%', width: '100%'}}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[28.6139,77.2090]}>
        <Popup>Delhi — sample marker</Popup>
      </Marker>
    </MapContainer>
  )
}
