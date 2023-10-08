import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



function ProductDetails(){
    // using by deta destructuring  method//useparams is a hook that call  particular string or val.
    
    const {id}= useParams();
    console.log(id)
    const[Singledata, axiosfun]=useState({})
const mysingledata = ()=>{
    axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((s)=>{
        console.log(s.data);
         axiosfun(s.data)
    })
}
useEffect(()=>{
    mysingledata();
},[])
return(
    <div>
        <h1>ProductDetails</h1>
        <h2>{Singledata.id}</h2>
        <h2>{Singledata.title}</h2>
    </div>
)
}
export default ProductDetails
