import React from 'react'
import Image from 'next/image'
function About() {
  return (
   <>
   <section className="section" id="about">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-7">
        <div className="mt-0">
          <h2><span className="font-weight-bold">Hello I Am Junaid Ejaz</span></h2>
          <p className="text-muted mt-4">Full Stack Developer</p>
          <p className="text-muted mt-2">A passionate developer who simply takes your business ideas and turn them into a fully functioning web application or scale up your existed application with the help of multiple modern technologies. I'm up for listening to your cool ideas and make it happen for you. </p>
		  {/* <div className="about_short_contact_wrap">
			<ul>
				<li>
					<span><label>Name:</label>John Williams</span>
				</li>
				<li>
					<span><label>Email:</label><a href="mailto:info@example.com">info@example.com</a></span>
				</li>
				<li>
					<span><label>Birthday:</label>12 March, 1991</span>
				</li>
				<li>
					<span><label>Study:</label>Chicago University</span>
				</li>
				<li>
					<span><label>Phone:</label><a href="#">(+12) 3467-890-123</a></span>
				</li>												
				<li>
					<span><label>From:</label><a className="href_location" href="#">Univercity of Chicago</a></span>
				</li>
				<li>
					<span><label>Residence:</label><a className="href_location" href="#">Chicago</a></span>
				</li>
				<li>
					<span><label>Freelance:</label><a className="href_location" href="#">Available</a></span>
				</li>	
				<li>
					<span><label>Website:</label><a className="href_location" href="#">www.mywebsite.com</a></span>
				</li>
				<li>
					<span><label>Skype:</label><a className="href_location" href="#">@myusername</a></span>
				</li>		
			</ul>
		  </div> */}
          <div>
            <ul className="mb-0 about-social list-inline mt-4">
              <li className="list-inline-item"><a href="https://github.com/Junaidejaz111" target={"_blank"}><i className="mdi mdi-github-face"></i></a></li>
              <li className="list-inline-item"><a href="https://www.linkedin.com/in/junaid-ejaz-015614121/"  target={"_blank"}><i className="mdi mdi-linkedin"></i></a></li>          
			  <li className="list-inline-item"><a href="https://wa.me/923470621590"  target={"_blank"}><i className="mdi mdi-whatsapp"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
	  <div className="col-lg-5">
        <div className="mt-4"> <Image src="/images/about-1.png" alt="" className="img-fluid" width="512px" height="512px"  /> </div>
      </div>
    </div>
	<div className="resume-container">
		<div className="row">
			<div className="col-xl-6 col-lg-6 col-md-6">
				<h2 className="font-weight-600 uppercase title-section mb-5">Experience</h2>
				<div className="resume-items">
					<div className="item">
						<span className="bullet"></span>
						<div className="card">
							<div className="card-header">
								<span className="year"><i className="mbri-calendar"></i> 2020 - Present</span>
								<span className="d-block font-weight-400 uppercase">
									Software Developer 
									<span className="separator"></span>
									<span className="font-weight-700">HISDU, Primary & Secondary Health Care Department Punjab, Pakistan</span>
								</span>
							</div>
							
						</div>
					</div>

					<div className="item">
						<span className="bullet"></span>
						<div className="card">
							<div className="card-header">
								<span className="year"><i className="mbri-calendar"></i> 2019 - 2020</span>
								<span className="d-block font-weight-400 uppercase">
									Php Developer
									<span className="separator"></span>
									<span className="font-weight-700">SDC, IMS</span>
								</span>
							</div>
						
						</div>
					</div>

				</div>
			</div>
			
			<div className="col-xl-6 col-lg-6 col-md-6 skills-container">
				<h2 className="font-weight-600 uppercase title-section mb-5">Education</h2>
				<div className="resume-items">
					<div className="item">
						<span className="bullet"></span>
						<div className="card">
							<div className="card-header">
								<span className="year"><i className="mbri-calendar"></i> 2021 - 2022</span>
								<span className="d-block font-weight-400 uppercase">
                                Diploma in Entrepreneurship & SME Management
									<span className="separator"></span>
									<span className="font-weight-700">Virtual University, Pakistan</span>
								</span>
							</div>
							
								
						</div>
					</div>
					
					<div className="item">
						<span className="bullet"></span>
						<div className="card">
							<div className="card-header">
								<span className="year"><i className="mbri-calendar"></i> 2014 - 2019</span>
								<span className="d-block font-weight-400 uppercase">
                                    Bachelor  In Computer Science 
									<span className="separator"></span>
									<span className="font-weight-700">Institute of Management Sciences, Lahore</span>
								</span>
							</div>
							
						</div>
					</div>

					
				</div>
			</div>
		</div>
		
		<div className="row">
			<div className="col-12">
				<h2 className="font-weight-600 uppercase title-section skills-title mb-2">Skills</h2>
			</div>
			<div className="col-12 col-sm-6 col-md-4">
				<span className="skill-text">PHP</span>
				<div className="chart-bar">
					<span className="item-progress" data-percent="80" style={{width: "100%"}}></span>
					<span className="percent" style={{right: "calc(20% - 21px)"}}>100%<div className="arrow"></div></span>
				</div>
			</div>

			<div className="col-12 col-sm-6 col-md-4">
				<span className="skill-text">Javascript</span>
				<div className="chart-bar">
					<span className="item-progress" data-percent="60" style={{width: "100%"}}></span>
					<span className="percent" style={{right: "calc(40% - 21px)"}}>100%<div className="arrow"></div></span>
				</div>
			</div>

			<div className="col-12 col-sm-6 col-md-4">
				<span className="skill-text">Asp.NET</span>
				<div className="chart-bar">
					<span className="item-progress" data-percent="75" style={{width: "80%"}}></span>
					<span className="percent" style={{right: "calc(25% - 21px)"}}>80%<div className="arrow"></div></span>
				</div>
			</div>

			<div className="col-12 col-sm-6 col-md-4">
				<span className="skill-text">Jquery</span>
				<div className="chart-bar">
					<span className="item-progress" data-percent="65" style={{width: "80%"}}></span>
					<span className="percent" style={{right: "calc(35% - 21px)"}}>80%<div className="arrow"></div></span>
				</div>
			</div>

			<div className="col-12 col-sm-6 col-md-4">
				<span className="skill-text">Laravel</span>
				<div className="chart-bar">
					<span className="item-progress" data-percent="90" style={{width: "75%"}}></span>
					<span className="percent" style={{right: "calc(10% - 21px)"}}>75%<div className="arrow"></div></span>
				</div>
			</div>

			<div className="col-12 col-sm-6 col-md-4">
				<span className="skill-text">React JS</span>
				<div className="chart-bar">
					<span className="item-progress" data-percent="85" style={{width: "75%"}}></span>
					<span className="percent" style={{right: "calc(15% - 21px)"}}>75%<div className="arrow"></div></span>
				</div>
			</div>

			<div className="col-12 col-sm-6 col-md-4">
				<span className="skill-text">Next JS</span>
				<div className="chart-bar">
					<span className="item-progress" data-percent="60" style={{width: "80%"}}></span>
					<span className="percent" style={{right: "calc(40% - 21px)"}}>80%<div className="arrow"></div></span>
				</div>
			</div>

            <div className="col-12 col-sm-6 col-md-4">
				<span className="skill-text">Vue JS</span>
				<div className="chart-bar">
					<span className="item-progress" data-percent="60" style={{width: "60%"}}></span>
					<span className="percent" style={{right: "calc(40% - 21px)"}}>60%<div className="arrow"></div></span>
				</div>
			</div>

            <div className="col-12 col-sm-6 col-md-4">
				<span className="skill-text">CSS</span>
				<div className="chart-bar">
					<span className="item-progress" data-percent="60" style={{width: "80%"}}></span>
					<span className="percent" style={{right: "calc(40% - 21px)"}}>80%<div className="arrow"></div></span>
				</div>
			</div>
		
			
		
		</div>
     </div>
  </div>
</section>

   </>
  )
}

export default About