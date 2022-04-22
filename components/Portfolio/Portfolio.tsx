import React from 'react'

function Portfolio() {
  return (
   <section className='porfolio section'id="work">
       <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-12">
        <div className="text-center">
		  <span className="sub-item-title">My Portfolio Work</span>
          <h2>Our Portfolio</h2>
          <p className="text-muted mx-auto section-subtitle mt-3">Lorem ipsum dolor sit amet, consect adipisic elit, sed do eiusmod tempor incididunt ut labore et d magna aliqua enim sed do sit.</p>
        </div>
      </div>
    </div>
    <div className="row mt-4">
      <ul className="col list-unstyled list-inline mb-0 text-uppercase work_menu" id="menu-filter">
        <li className="list-inline-item"><a className="active" data-filter="*">All</a></li>
        <li className="list-inline-item"><a className="" data-filter=".php">PHP</a></li>
        <li className="list-inline-item"><a className="" data-filter=".net">ASP.NET</a></li>
        <li className="list-inline-item"><a className="" data-filter=".laravel">Laravel</a></li>
		<li className="list-inline-item"><a className="" data-filter=".react">React JS</a></li>
		<li className="list-inline-item"><a className="" data-filter=".codeigniter">CodeIgniter</a></li>
		<li className="list-inline-item"><a className="" data-filter=".wordpress">Wordpress</a></li>

      </ul>
    </div>
  </div>
  <div className="container">
    <div className="row mt-4 work-filter">
      <div className="col-lg-4 work_item php"> <a href="images/portfolio/01_portfolio.jpg" className="img-zoom">
        <div className="work_box">
          <div className="work_img"> <img src="images/portfolio/01_portfolio.jpg" className="img-fluid mx-auto d-block rounded" alt="work-img" /> </div>
          <div className="work_detail">
            <p className="mb-2">Category Title Here</p>
            <h4 className="mb-0">Creative Design</h4>
          </div>
        </div>
        </a> 
	  </div>
      <div className="col-lg-4 work_item php codeigniter"> <a href="images/portfolio/02_portfolio.jpg" className="img-zoom">
        <div className="work_box">
          <div className="work_img"> <img src="images/portfolio/02_portfolio.jpg" className="img-fluid mx-auto d-block rounded" alt="work-img" /> </div>
          <div className="work_detail">
            <p className="mb-2">Category Title Here</p>
            <h4 className="mb-0">Creative Design</h4>
          </div>
        </div>
        </a> 
	  </div>
      <div className="col-lg-4 work_item php codeigniter"> <a href="images/portfolio/03_portfolio.jpg" className="img-zoom">
        <div className="work_box">
          <div className="work_img"> <img src="images/portfolio/03_portfolio.jpg" className="img-fluid mx-auto d-block rounded" alt="work-img" /> </div>
          <div className="work_detail">
            <p className="mb-2">Category Title Here</p>
            <h4 className="mb-0">Creative Design</h4>
          </div>
        </div>
        </a> 
	  </div>
      <div className="col-lg-4 work_item php codeigniter"> <a href="images/portfolio/04_portfolio.jpg" className="img-zoom">
        <div className="work_box">
          <div className="work_img"> <img src="images/portfolio/04_portfolio.jpg" className="img-fluid mx-auto d-block rounded" alt="work-img" /> </div>
          <div className="work_detail">
            <p className="mb-2">Category Title Here</p>
            <h4 className="mb-0">Creative Design</h4>
          </div>
        </div>
        </a> 
	  </div>
      <div className="col-lg-4 work_item php laravel"> <a href="images/portfolio/05_portfolio.jpg" className="img-zoom">
        <div className="work_box">
          <div className="work_img"> <img src="images/portfolio/05_portfolio.jpg" className="img-fluid mx-auto d-block rounded" alt="work-img" /> </div>
          <div className="work_detail">
            <p className="mb-2">Category Title Here</p>
            <h4 className="mb-0">Creative Design</h4>
          </div>
        </div>
        </a> 
	  </div>
      <div className="col-lg-4 work_item net"> <a href="images/portfolio/06_portfolio.jpg" className="img-zoom">
        <div className="work_box">
          <div className="work_img"> <img src="images/portfolio/06_portfolio.jpg" className="img-fluid mx-auto d-block rounded" alt="work-img" /> </div>
          <div className="work_detail">
            <p className="mb-2">Category Title Here</p>
            <h4 className="mb-0">Creative Design</h4>
          </div>
        </div>
        </a> 
	  </div>
	  <div className="col-lg-4 work_item net"> <a href="images/portfolio/07_portfolio.jpg" className="img-zoom">
        <div className="work_box">
          <div className="work_img"> <img src="images/portfolio/07_portfolio.jpg" className="img-fluid mx-auto d-block rounded" alt="work-img" /> </div>
          <div className="work_detail">
            <p className="mb-2">Category Title Here</p>
            <h4 className="mb-0">Creative Design</h4>
          </div>
        </div>
        </a> 
	  </div>
      <div className="col-lg-4 work_item php wordpress "> <a href="images/portfolio/08_portfolio.jpg" className="img-zoom">
        <div className="work_box">
          <div className="work_img"> <img src="images/portfolio/08_portfolio.jpg" className="img-fluid mx-auto d-block rounded" alt="work-img" /> </div>
          <div className="work_detail">
            <p className="mb-2">Category Title Here</p>
            <h4 className="mb-0">Creative Design</h4>
          </div>
        </div>
        </a> 
	  </div>
      <div className="col-lg-4 work_item php wordpress"> <a href="images/portfolio/09_portfolio.jpg" className="img-zoom">
        <div className="work_box">
          <div className="work_img"> <img src="images/portfolio/09_portfolio.jpg" className="img-fluid mx-auto d-block rounded" alt="work-img" /> </div>
          <div className="work_detail">
            <p className="mb-2">Category Title Here</p>
            <h4 className="mb-0">Creative Design</h4>
          </div>
        </div>
        </a> 
	  </div>
      <div className="col-lg-4 work_item php wordpress"> <a href="images/portfolio/09_portfolio.jpg" className="img-zoom">
        <div className="work_box">
          <div className="work_img"> <img src="images/portfolio/09_portfolio.jpg" className="img-fluid mx-auto d-block rounded" alt="work-img" /> </div>
          <div className="work_detail">
            <p className="mb-2">Category Title Here</p>
            <h4 className="mb-0">Creative Design</h4>
          </div>
        </div>
        </a> 
	  </div>
      <div className="col-lg-4 work_item react"> <a href="images/portfolio/09_portfolio.jpg" className="img-zoom">
        <div className="work_box">
          <div className="work_img"> <img src="images/portfolio/09_portfolio.jpg" className="img-fluid mx-auto d-block rounded" alt="work-img" /> </div>
          <div className="work_detail">
            <p className="mb-2">Category Title Here</p>
            <h4 className="mb-0">Creative Design</h4>
          </div>
        </div>
        </a> 
	  </div>
    </div>
  </div>
   </section>
  )
}

export default Portfolio