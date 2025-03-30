import React from 'react'
import Left from './Left'
import Right from './Right'

const Hero = () => {
  return (
    <div className='flex justify-around items-center'>
        <Left/>
        <Right/>
    </div>
  )
}

export default Hero