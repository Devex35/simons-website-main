import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Body from '../components/Body'
import Contact from '../components/Contact'
import Services from '../components/Services'
import About from '../components/About'
import Homepage from '../components/Homepage'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Simons Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Hero /> */}
      <Homepage />
      <About />
      <Body />
      <Services />
      <Contact />
    </div>
  )
}

export default Home
