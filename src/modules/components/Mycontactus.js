import React, { Fragment } from "react";
import {mydata} from "./data";
import { yellow } from "@mui/material/colors";
function Mycontactus(){
    return(
        // <div>sdfhghj</div>
        <Fragment>
           <div className='container'>
           <div className='row'>
           <div className='col-12'>
           <h2>Total Users:{mydata.length}</h2>
           </div>
           

 {/* <div className="card text-bg-warning mb-3">
  <div="card-header">Header</div>
  <div className="card-body">
    <h5 className="card-title">Warning card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}
{mydata.map((c)=>{
    return( 
        <div className="col-md-3">
    <div className="card text-bg- warinng mb-3">
        <img src={c.myimg} className='rounded-circle p-3' />       

    <h1 className="text-center">name of user</h1>
</div>
</div>
    )
})}




</div>
     </div>
    </Fragment>
    
    )
}
export default Mycontactus