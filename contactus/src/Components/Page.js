import React from 'react'
import img from '../Components/Capture.PNG'
import imag from '../Components/icon.PNG'
import styles from '../Components/style.css'
import FormsPage from '../Components/FormsPage'
function Page() {
  
  return (
 <div className="container-fluid" id="main">
<div className="row">
    <div className="col-lg-6"><img src={img} className="imgstyle" alt="" /></div>
    <div className="col-lg-6 p-5" style={{backgroundColor: "white"}} > <p className="fw-bold fs-4"><img src={imag} className="image-fluid" alt="" />Lottery Display</p> 
    <div className="container" id="col2" >
      <div className="row">
      <p className="fw-bold" >Login</p>
      <p className="fw-bold">Login to your account</p>
     <FormsPage/>
      </div>
    </div>
    </div>
</div>
</div>

  )
}

export default Page