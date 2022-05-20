import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Info from '../components/info'
import Contact from '../components/contact'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        
      </Head>
      <header className="w-screen">
        <Navbar />
      </header>

      <body className="bg-slate-50  font-serif w-screen">
        <Hero />
        <Info />
        <Contact />
      </body>

      <footer className="font-serif  bg-black text-white  w-screen">
        <Footer />
      
      </footer>
    </>
  );
}

export default Home
