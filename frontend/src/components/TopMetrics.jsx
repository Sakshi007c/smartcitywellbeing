import React from 'react'

const cards = [
  {title:'Live Traffic Index', value:'73/100', note:'-5% from last hour'},
  {title:'Air Quality Index', value:'42 AQI', note:'+8% from last hour'},
  {title:'Electricity Cons.', value:'234.5 MWh', note:'+2.3% from last hour'},
  {title:'Water Usage', value:'1.8M Liters', note:'-1.2% from last hour'},
  {title:'CO2 Levels', value:'385 ppm', note:'+0.5% from last hour'},
  {title:'Emergency', value:'3 Active', note:'+2 from last hour'},
]

export default function TopMetrics(){
  return (
    <div className="grid grid-cols-6 gap-4 mb-6">
      {cards.map((c, i)=>(
        <div key={i} className="col-span-1 bg-white rounded-xl p-4 shadow-sm">
          <div className="text-sm text-slate-500">{c.title}</div>
          <div className="text-xl font-semibold mt-2">{c.value}</div>
          <div className="text-xs text-slate-400 mt-1">{c.note}</div>
        </div>
      ))}
    </div>
  )
}