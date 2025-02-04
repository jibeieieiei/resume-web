import React from 'react'
import { EDUCATION } from '../_constants/data'

const Education = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <section className="text-2xl font-bold uppercase text-left">
        Education
      </section>
      <hr className="border-t border-gray-700" />
      <section>
        {EDUCATION.map((item) => (
          <div key={item.title} className="flex flex-col">
            <span className="font-semibold">{item.title}</span>
            <span>{item.detail}</span>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Education
