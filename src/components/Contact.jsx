import React from 'react'

import { SectionWrapper } from '../hoc'
import { gmail, phone, github } from '../assets'

const Contact = () => {
  return (
    <div
      className={``}
    >
      <div className="flex items-center justify-center w-full h-[80px] gap-8">
        <a href="mailto:ryanmolazem@gmail.com">
          <img src={gmail} width={'50px'} alt="" />
        </a>
        <a href="https://github.com/AriyanMLZM">
          <img src={github} width={'50px'} alt="" />
        </a>
        <a href="tel:+989175894212">
          <img src={phone} width={'50px'} alt="" />
        </a>
      </div>
      <div className='flex justify-center mt-12'>
        <p className='text-gray-500 select-none'>created by <a className='text-white hover:text-[#915EFF] text-[18px]' href="https://github.com/AriyanMLZM">AriyanMlzm</a></p>
      </div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
