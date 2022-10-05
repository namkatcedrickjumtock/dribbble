import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    // https://logos-download.com/wp-content/uploads/2016/09/Dribbble_logo_black.png
    <>
      <Head>
        <link rel="icon" href="https://w7.pngwing.com/pngs/317/801/png-transparent-dribbble-logo-media-social-social-media-icon-thumbnail.png" />
        <title>Dribbble-Discover</title>
      </Head>
      <div>
        <p>Home page</p>
      </div>
    </>
  )
}

export default Home
