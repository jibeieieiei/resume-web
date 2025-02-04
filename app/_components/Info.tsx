import React from 'react'
import { INFO } from '../_constants/data'
import Link from 'next/link'

const Info = () => {
  return (
    <div className="w-full max-sm:flex-col flex justify-between items-center">
      <div className="text-left w-48">
        <div>{INFO.tel}</div>
        <div>{INFO.email}</div>
        <div>{INFO.location}</div>
      </div>
      <div className="text-center p-4">
        <div className="font-medium text-4xl">{INFO.fullName}</div>
        <div>({INFO.nickName})</div>
      </div>
      <div className="text-right w-48 flex flex-col *:underline">
        <Link href={INFO.github.link}>{INFO.github.display}</Link>
        <Link href={INFO.website.link}>{INFO.website.display}</Link>
        <Link href={INFO.linkedIn.link}>{INFO.linkedIn.display}</Link>
      </div>
    </div>
  )
}

export default Info
