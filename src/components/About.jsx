import React from 'react'
import Tilt from 'react-tilt'

import { styles } from '../styles'

import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </div>
  </Tilt>
)

const About = () => {
  return (
    <>
      <div>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </div>

      <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I'm a skilled web developer with experience in c#, ASP.Net framework and
        Javascript. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!{' '}
        <br /><br /> Age : 22 <br /> Marital Status : Single
      </p>
    </>
  )
}

export default SectionWrapper(About, 'about')
