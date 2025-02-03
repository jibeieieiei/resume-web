import React from 'react'
import { INFO } from '../_constants/data'
import Link from 'next/link'

const Info = () => {
  return (
    <div className="w-full flex justify-between items-center">
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
        <Link href={`https://${INFO.github}`}>{INFO.github}</Link>
        <Link href={`https://${INFO.website}`}>{INFO.website}</Link>
        <Link href={`https://${INFO.linkedIn}`}>{INFO.linkedIn}</Link>
      </div>
    </div>
  )
}

export default Info
