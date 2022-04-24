
import Script from 'next/script'
import React from 'react'
import Footer from './Footer'
import Loader from './Loader'
import Navbar from './Navbar'

interface Props {
    children: React.ReactNode
}
function Layout(props : Props) {
  return (
      <>
      <Loader />
      <Navbar />
   
        {props.children}
   
      <Footer />
<Script src="./js/jquery.min.js"  strategy="beforeInteractive"/> 
<Script src="./js/popper.min.js"  strategy="beforeInteractive" /> 
<Script src="./js/bootstrap.min.js"  strategy="beforeInteractive" /> 
<Script src="./js/jquery.easing.min.js"   strategy="beforeInteractive"/> 
<Script src="./js/scrollspy.min.js"   strategy="beforeInteractive"/> 
<Script src="./js/isotope.js"  strategy="beforeInteractive" /> 
<Script src="./js/jquery.magnific-popup.min.js"  strategy="beforeInteractive"/> 
<Script src="./js/jquery.simple-text-rotator.js"  strategy="beforeInteractive"/> 
<Script src="./js/owl.carousel.min.js"   /> 

<Script src="./js/switcher.js"  strategy="beforeInteractive"/> 
<Script src="./js/custom_script.js"   /> 
<Script
  id="show-banner"
  dangerouslySetInnerHTML={{
    __html: `$(".simple-text-rotate").textrotator({
        animation: "fade",
        speed: 3500
    });
    `
  }}

/>

      </>
  )
}

export default Layout