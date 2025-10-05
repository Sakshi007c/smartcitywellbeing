import React from 'react'
import TopMetrics from './TopMetrics'
import SideNav from './SideNav'
import CityMap from './CityMap'
import TransportOverview from './TransportOverview'

export default function Dashboard(){
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-[1200px] mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="flex">
          <SideNav />
          <div className="flex-1 p-6">
            <h1 className="text-2xl font-semibold mb-4">Smart City Monitoring</h1>
            <TopMetrics />
            <CityMap />
            <TransportOverview />
          </div>
        </div>
      </div>
    </div>
  )
}