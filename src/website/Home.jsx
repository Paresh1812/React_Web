import React from 'react'
import home from '../website/home.svg'
import Coman from './Coman'

function Home() {
  return (
    <>
      <Coman
        name="Grow Your Business With"
        image={home}
        visit="/service"
        btn_name="Get Stated"
      />
    </>
  )
}

export default Home