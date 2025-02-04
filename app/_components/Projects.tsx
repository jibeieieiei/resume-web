import React from 'react'
import { PROJECTS } from '../_constants/data'

const Projects = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <section className="text-2xl font-bold uppercase text-left">
        Projects
      </section>
      <hr className="border-t border-gray-700" />
      <section className="flex flex-col gap-1">
        {PROJECTS.map((item) => (
          <div className="flex flex-col gap-1" key={item.title}>
            <span className="font-semibold">{item.title}</span>
            <ul className="list-disc pl-4">
              {item.detail.map((dt) => (
                <li key={dt}>{dt}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Projects
