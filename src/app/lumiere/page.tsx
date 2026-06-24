'use client'

import { useState } from 'react'

export default function Lumiere() {
  const [on, setOn] = useState(false)

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center gap-12 transition-colors duration-500"
      style={{ backgroundColor: on ? '#fffbeb' : '#0f0f0f' }}
    >
      <div className="flex flex-col items-center gap-2">
        <div
          className="transition-all duration-500"
          style={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            background: on
              ? 'radial-gradient(circle, #fef08a, #facc15, #ca8a04)'
              : '#1f1f1f',
            boxShadow: on
              ? '0 0 60px 30px #fef08a, 0 0 120px 60px #facc1566'
              : 'none',
          }}
        />
        <p
          className="text-sm font-medium tracking-widest uppercase transition-colors duration-500"
          style={{ color: on ? '#92400e' : '#555' }}
        >
          {on ? 'Allumée' : 'Éteinte'}
        </p>
      </div>

      <button
        onClick={() => setOn(!on)}
        className="relative w-20 h-10 rounded-full transition-colors duration-300 focus:outline-none focus:ring-4"
        style={{
          backgroundColor: on ? '#facc15' : '#374151',
          boxShadow: on ? '0 0 12px #facc15' : 'none',
        }}
        aria-label="Interrupteur"
      >
        <span
          className="absolute top-1 w-8 h-8 bg-white rounded-full shadow-md transition-all duration-300"
          style={{ left: on ? '2.5rem' : '0.25rem' }}
        />
      </button>
    </main>
  )
}
