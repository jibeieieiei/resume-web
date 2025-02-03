import Education from './_components/Education'
import Info from './_components/Info'
import Menu from './_components/Menu'
import Projects from './_components/Projects'
import Tools from './_components/Tools'
import WorkExperiences from './_components/WorkExperiences'

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col justify-center items-center mx-auto">
      <Menu />
      <div
        className="w-[210mm] p-4 flex flex-col gap-4"
        // id="section-to-print"
      >
        <Info />
        <Education />
        <Tools />
        <WorkExperiences />
        <Projects />
      </div>
    </main>
  )
}
