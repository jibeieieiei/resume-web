import React from 'react'
import { WORK_EXPERIENCES } from '../_constants/data'

const WorkExperiences = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <section className="text-2xl font-bold uppercase text-left">
        Work Experiences
      </section>
      <hr className="border-t border-gray-700" />
      <section className="flex flex-col gap-2">
        {WORK_EXPERIENCES.map((item) => (
          <div key={item.title} className="flex flex-col gap-1">
            <div className="flex justify-between items-center w-full font-semibold text-lg">
              <span className="flex-1">{item.category}</span>
              <span>{item.title}</span>
              <span className="flex-1 text-right">{item.date}</span>
            </div>
            {item.projects.map((p) => (
              <div className="flex flex-col gap-1" key={p.name}>
                <span className="font-semibold">{p.name}</span>
                <ul className="list-disc pl-4">
                  {p.detail.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <span>
                  <span className="font-semibold mr-2">Skills: </span>
                  <span>{p.skills}</span>
                </span>
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  )
}

export default WorkExperiences
