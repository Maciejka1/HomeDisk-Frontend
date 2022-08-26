import { AnimatePresence } from 'framer-motion'
import '../styles/globals.css'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>HomeDisk Cloud server</title>
        <meta name="description" content="HomeDisk is extremely fast cloud server written in rust." />
        <link rel="icon" href="/images/icons/favicon.ico" />
      </Head>
      <Nav/>
        <AnimatePresence>
          <Component {...pageProps} />
        </AnimatePresence>
      <Footer/>
    </>
  )
}

export default MyApp
