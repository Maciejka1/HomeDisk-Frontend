import { AnimatePresence } from 'framer-motion'
import '../styles/globals.css'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import "@fontsource/ubuntu"
import "@fontsource/ubuntu/700.css"
function MyApp({ Component, pageProps, router }) {
  return(
    <>
      <Head>
        <title>HomeDisk Cloud server</title>
        <meta name="description" content="HomeDisk is extremely fast cloud server written in rust." />
        <link rel="icon" href="/images/icons/favicon.ico" />
      </Head>
      <Nav/>
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      <Footer/>
    </>
  )
}

export default MyApp
