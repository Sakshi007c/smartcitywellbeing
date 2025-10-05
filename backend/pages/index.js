import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'

// react-leaflet must be loaded dynamically to avoid SSR issues
const Map = dynamic(() => import('../components/Map'), { ssr: false })

export default function Home() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    // try fetching backend health
    const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
    axios.get(`${apiBase}/health`).then(r => setMessage(r.data.message || r.data.status)).catch(()=>setMessage('Backend not running'))
  }, [])

  return (
    <>
      <Head>
        <title>Urban Wellbeing Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-slate-50 p-4">
        <h1 className="text-3xl font-bold mb-4">Urban Wellbeing Dashboard</h1>
        <p className="mb-4">Backend status: {message}</p>
        <div className="h-[600px] rounded shadow">
          <Map />
        </div>
      </main>
    </>
  )
}
