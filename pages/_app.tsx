
import '../styles/css/bootstrap.min.css'

import  '../styles/css/materialdesignicons.min.css'
import  '../styles/css/mobiriseicons.css'
import  '../styles/css/magnific-popup.css'
import  '../styles/css/animate.min.css'
import  '../styles/css/owl.carousel.css'
import  '../styles/css/owl.theme.css'
import  '../styles/css/owl.transitions.css'
import '../styles/globals.css'
import  '../styles/css/color/default_color.css'

import { ParallaxProvider } from 'react-scroll-parallax';
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
  <ParallaxProvider>
    <Header/>
    <Layout>
    <Component {...pageProps} /> 
    </Layout>
    </ParallaxProvider>
    )
}

export default MyApp
