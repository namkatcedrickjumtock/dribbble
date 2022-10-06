import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'

const Home: NextPage = () => {
  return (
    // https://logos-download.com/wp-content/uploads/2016/09/Dribbble_logo_black.png
    <>
      <Head>
        <link rel="icon" href="https://cdn.dribbble.com/assets/dribbble-ball-192-23ecbdf987832231e87c642bb25de821af1ba6734a626c8c259a20a0ca51a247.png" />
        <title>Dribbble - Discover the World’s Top Designers &amp; Creative Professionals</title>
      </Head>
      <div className=''>
        <Header />
      </div>
    </>
  )
}

export default Home
