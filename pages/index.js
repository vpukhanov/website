import Head from 'next/head'

import CommonHead from '../components/CommonHead'
import Education from '../components/Education'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import PersonalProjects from '../components/PersonalProjects'
import WorkExperience from '../components/WorkExperience'

export default function Home() {
  return (
    <div className='app-container'>
      <Head>
        <title>Vyacheslav Pukhanov</title>
        <meta
          name='description'
          content='Vyacheslav Pukhanov is a senior frontend engineer and a hobbyist iOS developer based in Yaroslavl, Russia'
        />
        <CommonHead />
      </Head>

      <Navbar />
      <main>
        <HeroSection />
        <WorkExperience />
        <Education />
        <PersonalProjects />
      </main>
      <Footer />
    </div>
  )
}
