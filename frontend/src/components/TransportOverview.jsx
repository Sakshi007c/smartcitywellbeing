import React from 'react'
export default function TransportOverview(){
  const routes = [
    {name:'Metro Line 1', val:'85%'},
    {name:'Metro Line 2', val:'92%'},
    {name:'Bus Route 15', val:'67%'},
    {name:'Bus Route 22', val:'45%'},
    {name:'Bus Route 43', val:'23%'},
    {name:'Bus Route 4', val:'56%'},
  ]
  return (
    <div className="mb-6">
      <div className="font-semibold mb-3">Transport Overview</div>
      <div className="grid grid-cols-6 gap-4">
        {routes.map((r,i)=>(
          <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
            <div className="text-sm text-slate-500">{r.name}</div>
            <div className="text-2xl font-semibold mt-2">{r.val}</div>
          </div>
        ))}
      </div>
    </div>
  )
}