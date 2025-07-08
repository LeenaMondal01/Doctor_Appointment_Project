import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import HealthTools from '../components/HealthTools'
import HealthToolsSection from '../components/HealthToolsSection'

const Home = () => {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
      <Banner/>
      <TopDoctors/>
      <HealthTools/>
      
      {/* <HealthToolsSection/> */}
    </div>
  )
}

export default Home