import React from 'react'
import { WORK_EXPERIENCES } from '../_constants/data'

const WorkExperiences = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <section className="text-2xl font-bold uppercase text-left">
        Work Experiences
      </section>
      <hr className="border-t border-gray-700" />
      <section className="flex flex-col gap-1">
        {WORK_EXPERIENCES.map((item) => (
          <div key={item.title} className="flex flex-col gap-1">
            <div className="flex justify-between items-center w-full font-semibold">
              <span className="flex-1">{item.category}</span>
              <span>{item.title}</span>
              <span className="flex-1 text-right">{item.date}</span>
            </div>
            <ul className="list-disc pl-4">
              <li>{item.detail}</li>
            </ul>
          </div>
        ))}
      </section>
    </div>
  )
}

export default WorkExperiences
