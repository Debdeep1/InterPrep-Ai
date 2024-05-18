import React from 'react'
import Hero from './Hero'
import InterviewPreview from './InterviewPreview'

const HeaderContainer = () => {
  return (
    <div className='my-3 py-12 px-16 flex gap-3 justify-between items-center'>
        <Hero />
        <InterviewPreview />
    </div>
  )
}

export default HeaderContainer