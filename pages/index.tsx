import type { NextPage } from 'next'
import Header from '../components/Header'
import Layout from '../components/Layout'
import HomeContent from '../components/Home-Components/Home'
import About from '../components/Home-Components/About'
import Contact from '../components/Home-Components/Contact'
import Portfolio from '../components/Portfolio/Portfolio'
import Testimonials from '../components/Home-Components/Testimonials'


const Home: NextPage = () => {
  return (
    <>
    <Header/>
    <Layout>
     
    <HomeContent />
    <About />
    <Portfolio />
    <Testimonials />
    <Contact />
    <a href="#" className="back_top"> <i className="mdi mdi-chevron-up"> </i> </a> 
    </Layout>


    </>
 
  )
}

export default Home
