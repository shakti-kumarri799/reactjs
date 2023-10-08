import React, { Fragment } from "react";
import {
    BarChart,
    Bar,
    
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    
  } from "recharts";
  import { data } from "./data";
  
 function Mygraphpage(){
    return(
    <Fragment>

    <div className="container">
        <div className="row">
            <div className="col-12">
          <h1>this is electrical graph</h1>

 

                            
<BarChart width={1000} height={250} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="pv" fill="#8884d8" />
  <Bar dataKey="uv" fill="#82ca9d" />
  <Bar dataKey="uv" fill="yellow" />

</BarChart>

     
                            
<BarChart 
     width={730} 
     height={250} 
     data={data}>
  {/* <CartesianGrid strokeDasharray="3 3" /> */}
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="pv" fill="#8884d8" />
  <Bar dataKey="uv" fill="#82ca9d" />
</BarChart>
    </div>
    </div>
    </div>
    </Fragment>
        
          
  
  )
}
export default Mygraphpage