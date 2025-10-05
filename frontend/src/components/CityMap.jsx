import React, { useState } from 'react'
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function CityMap(){
  const [activeTab, setActiveTab] = useState('airpollution')
  const data = {
    airpollution: [
      { position: [40.7128, -74.006], level: "High", desc: "High PM2.5 levels" },
      { position: [40.758, -73.9855], level: "Moderate", desc: "Moderate NO2 levels" },
    ],
    heat: [
      { position: [40.7484, -73.9857], level: "Extreme", desc: "Heat stress warning" },
      { position: [40.7306, -73.9352], level: "Mild", desc: "Normal temperature" },
    ],
    greenspace: [
      { position: [40.7829, -73.9654], level: "Dense", desc: "Central Park" },
      { position: [40.7003, -73.992], level: "Sparse", desc: "Low vegetation" },
    ],
  }
  return (
    <div className="mb-6 bg-slate-50 rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="font-semibold">Live City Map</div>
        <div className="flex space-x-2">
          <button className={`px-3 py-1 rounded ${activeTab==='airpollution'?'bg-black text-white':''}`} onClick={()=>setActiveTab('airpollution')}>Air Pollution</button>
          <button className={`px-3 py-1 rounded ${activeTab==='heat'?'bg-black text-white':''}`} onClick={()=>setActiveTab('heat')}>Heat Stress</button>
          <button className={`px-3 py-1 rounded ${activeTab==='greenspace'?'bg-black text-white':''}`} onClick={()=>setActiveTab('greenspace')}>Green Space</button>
        </div>
      </div>
      <div className="h-64 rounded-lg overflow-hidden">
        <MapContainer center={[40.7128, -74.006]} zoom={12} style={{height:'100%', width:'100%'}}>
          <TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {data[activeTab].map((p,i)=>(
            <CircleMarker key={i} center={p.position} radius={10} pathOptions={{color: p.level==='High'||p.level==='Extreme'?'red':p.level==='Moderate'?'orange':'green'}}>
              <Popup><strong>{p.level}</strong><br/>{p.desc}</Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
    </div>
  )
}