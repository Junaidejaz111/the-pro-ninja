import Link from 'next/link';
import Script from 'next/script'
import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';



function HomeContent() {
  return (
    <>
    
    <ParallaxBanner
  layers={[
    {
      image: '/images/header-bg.jpg',
      speed: -30,
      expanded: false,
    
    },
  ]}
  className="aspect-[2/1]"
 
>
    <div className={`section jarallax h-100vh homeSection bg-overlay`}  
    
    id="home">
 
  <div className="header-table">
    <div className="header-table-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="text-left mx-auto">
              <h4 className="text-white first-title mb-4">Welcome to Hire</h4>
              <h1 className="header-name text-white text-capitalize mb-0">A Pro Ninja <span className="simple-text-rotate font-weight-bold">Programmer., Full Stack Developer., JS Developer</span></h1>
              {/* <p className="text-white header-desc mt-4">I'm a Freelance UI/UX Designer and Developer based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p> */}
			  <div className="mt-4 pt-2"> 
				<Link href= "/Resume" ><a className="btn btn-outline-custom custom-btn-item btn-round-6"> Download Cv</a></Link>
				<a href="#" className="btn btn-outline-custom custom-btn-item btn-round-6">Hire Me!</a> 
			  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="scroll_down"> <a href="#about" className="scroll"> <i className="text-white"></i> </a> </div>
  
</div>
<div className="line-page-wrapper"></div>
</ParallaxBanner>
</>
  )
}

export default HomeContent