'use client'
import React from 'react'

const Menu = () => {
  return (
    <div className="w-full flex justify-center items-center bg-gray-300 h-28 print:hidden">
      <div className="flex flex-col justify-center items-center">
        <div>RESUME</div>
        <div>
          <span>Try to print </span>
          <button
            className="underline"
            onClick={() => {
              window.print()
            }}
          >
            here
          </button>
        </div>
      </div>
    </div>
  )
}

export default Menu
