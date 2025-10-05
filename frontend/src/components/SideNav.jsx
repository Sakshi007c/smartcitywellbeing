import React from 'react'
export default function SideNav(){
  const items = ['☰','🚦','🌬️','⚡','💧','🌫️','❗']
  return (
    <div className="w-20 bg-gradient-to-b from-white to-slate-50 p-4 flex flex-col items-center">
      <div className="mb-6 p-2 bg-black text-white rounded-full">W</div>
      <div className="space-y-4">
        {items.map((it, idx)=>(
          <button key={idx} className="w-12 h-12 flex items-center justify-center rounded-lg hover:bg-slate-100">{it}</button>
        ))}
      </div>
      <div className="mt-auto">
        <button className="w-12 h-12 rounded-full bg-black text-white">☀️</button>
      </div>
    </div>
  )
}