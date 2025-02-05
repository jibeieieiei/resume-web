'use client'
import React, { useState } from 'react'
import { ACTIVITIES } from '../_constants/data'

const Activities = () => {
  const [hiddenMode, setHiddenMode] = useState(true)
  return (
    <div
      className={`w-full flex flex-col gap-2 ${
        hiddenMode ? 'text-gray-200 print:hidden' : 'text-black'
      } `}
    >
      <section className="text-2xl font-bold uppercase text-left">
        <span>Activities</span>
        <button
          className="text-right text-sm font-normal lowercase ml-4 underline print:hidden"
          onClick={() => {
            setHiddenMode(!hiddenMode)
          }}
        >
          [hidden]
        </button>
      </section>
      <hr
        className={`border-t ${
          hiddenMode ? 'border-gray-200' : 'border-gray-700'
        }`}
      />
      <section className="flex flex-col gap-1">
        {ACTIVITIES.map((item) => (
          <div className="flex flex-col gap-1" key={item.title}>
            <span className="font-semibold">{item.title}</span>
            <ul className="list-disc pl-4">
              <li>{item.detail}</li>
            </ul>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Activities
