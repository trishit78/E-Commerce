import React from 'react' 

import Hero from '../../Components/Hero/Hero'
import Layout from '../../Components/Layout/Layout'
import Service from '../../Components/Service/Service'
import Gallery from '../../Components/Gallery/Gallery'
function Home() {
  return (
    <div>
      <Layout>
        <Hero/>
        <Service/>
        <Gallery/>
    </Layout>

    </div>
  )
}

export default Home
