import React from 'react'

function Contact() {
  return (
    <section className="section" id="contact">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="text-center">
            <span className="sub-item-title">Contact Us</span>
            <h2>Get In Touch</h2>
            <p className="text-muted mx-auto section-subtitle mt-3">Lorem ipsum dolor sit amet, consect adipisic elit, sed do eiusmod tempor incididunt ut labore et d magna aliqua enim sed do sit.</p>
          </div>
        </div>
      </div>
      <div className="row mt-5">
          <div className="col-lg-6">
              <div className="text-center contact_box_area">
                <div> <i className="mbri-mobile text-custom h1"></i> </div>
                <div className="contact_detail">
                  <h5 className="mt-1 mb-1 contact_detail-title font-weight-bold">Contact Us</h5>
                  <p className="text-muted">(+92) 347-0621590</p>
                </div>
              </div>
              <div className="text-center contact_box_area">
                <div> <i className="mbri-letter text-custom h1"></i> </div>
                <div className="contact_detail">
                  <h5 className="mt-1 mb-1 contact_detail-title font-weight-bold">Email Address</h5>
                  <p className="text-muted">junaidejaz.111@gmail.com</p>
                </div>
              </div>
              		  
          </div>
          <div className="col-lg-6">
              <div className="vfx-form-group">
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group mb-4">
                        <input name="name" id="name" type="text" className="form-control" placeholder="Name*" required />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mb-4">
                        <input name="email" id="email" type="email" className="form-control" placeholder="Email*" required />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mb-4">
                        <input type="text" className="form-control" id="phone" placeholder="Phone" required/>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mb-4">
                        <input type="text" className="form-control" id="subject" placeholder="Subject" required/>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-4">
                        <textarea name="comments" id="comments" rows= {4} className="form-control" placeholder="Message..."></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 text-center">
                      <input type="submit" className="btn btn-custom" value="Send Message" />
                    </div>
                  </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact