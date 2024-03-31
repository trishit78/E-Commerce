import React from 'react' 

import Hero from '../../Components/Hero/Hero'
//import Layout from '../../Components/Layout/Layout'
import Service from '../../Components/Service/Service'
import Gallery from '../../Components/Gallery/Gallery'
function Home() {
  return (
    <div>
      <>
        <Hero/>
        <Service/>
        <Gallery/>
    </>

    </div>
  )
}

export default Home
