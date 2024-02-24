import React from 'react'

const DayGrid = ({month}) => {
  return (
    <div>
    <div className="grid gap-1 grid-cols-5  grid-rows-7">
      {[...Array(30)].map((_, index) => (
        <div
          key={index}
          className="h-4 w-4 rounded bg-white/80 border border-purple-300 "
        >
          &nbsp;
        </div>
      ))}
    </div>
    <p className='text-lg font-medium text-purple-950'>{month}</p>
  </div>
  )
}

export default DayGrid
