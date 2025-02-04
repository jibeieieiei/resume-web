import React from 'react'
import { TOOLS } from '../_constants/data'

const Tools = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <section className="text-2xl font-bold uppercase text-left">
        Tools
      </section>
      <hr className="border-t border-gray-700" />
      <ul className="list-disc pl-4">
        {TOOLS.map((item) => (
          <li className="w-full" key={item.category}>
            <div className="flex gap-2">
              <span className="w-28">{item.category}:</span>
              <span>{item.detail}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tools
