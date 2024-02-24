import React from 'react'
import DayGrid from './DayGrid'

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const MonthGrid = () => {
  return (
    <div className="flex justify-center lg:justify-start items-center flex-wrap gap-4">
    {months.map((month, index) => (
        <div key={index}>
          <DayGrid month={month} />
        </div>
      ))}
  </div>
  )
}

export default MonthGrid
