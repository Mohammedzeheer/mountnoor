'use client'
import React, { useEffect, useState } from 'react'
import AfterPoints from './AfterPoints'
import Result from './Result'

function PointSection() {
  const [isTeamPoints, setIsTeamPoints] = useState(true);
  return (
    <div className='w-full'>
      <div className='flex justify-evenly w-full text-white '>
        <button onClick={() => setIsTeamPoints(true)} className='bg-yellow-900 hover:bg-yellow-950 duration-150 w-1/2 py-4 md:py-0 text-start px-12  lg:px-36 md:px-24'><h1 className='text-2xl font-bold'>Team Points</h1></button>
        <button onClick={() => setIsTeamPoints(false)} className='bg-yellow-200 hover:bg-yellow-300 text-black duration-150 w-1/2 py-4 px-8  md:p-6 text-start  lg:px-36 md:px-24'><h1 className='text-2xl font-bold'>Results</h1></button>
      </div>
      <div className='bg-yellow-100 py-2'>
        {isTeamPoints ? <AfterPoints /> : <Result />}
      </div>
    </div>
  )
}

export default PointSection
