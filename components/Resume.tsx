

import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'
import Loader from './Loader';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



function Resume(){
  

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);


  return (
    <section className="section" id="contact">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
      <Document file="/Junaid-Ejaz-Resume.pdf"  loading = {<Loader />}>
      <Page pageNumber={pageNumber} />
      </Document>
      </div>
      </div>
      </div>
      </section>

  )
}

export default Resume