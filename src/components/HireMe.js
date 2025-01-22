import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4
    flex items-center justify-center overflow-hidden'>
      <div className='w-48 h-auto flex items-center justify-center relative'>
        <CircularText className={"fill-none animate-spin-slow"} />

        <Link href="mailto:joseyanez047@gmail.com" 
          className='flex items-center justify-center
          absolute left-1/ top-1/3 -translate-x-1/2 -translate-y-1/2 
          bg-dark text-light shadow-md 
          w-20 h-20 rounded-full text-center font-semibold hover:bg-light hover:text-dark
          '>
          Hire
        </Link>

      </div>
    </div>
  )
}

export default HireMe
