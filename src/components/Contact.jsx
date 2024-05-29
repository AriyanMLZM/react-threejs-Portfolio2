import React from 'react'

import { SectionWrapper } from '../hoc'
import { gmail, phone, github } from '../assets'

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <div className="flex items-center justify-center w-full h-[80px] gap-8">
        <a href="mailto:maryamtalebzadeh2002@gmail.com">
          <img src={gmail} width={'60px'} alt="" />
        </a>
        <a href="https://github.com/Maryam-Talebzadeh">
          <img src={github} width={'60px'} alt="" />
        </a>
        <a href="tel:+989386485663">
          <img src={phone} width={'60px'} alt="" />
        </a>
      </div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
