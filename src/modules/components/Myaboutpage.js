import React, { Fragment } from "react";
import Abc from '../images/image4.jpg.jpg';
const mydata= [7,4,43,22,4,6,7,8,]
function Myaboutpage(){
    return(
        <Fragment>
        <div>Myaboutpage</div>
        <img src={Abc} width='500' alt="dfg"/>
        
        {mydata.map((c)=>{
           return(
            <h1>this is shakti: {c}</h1>
           )
           })}
            <select>
                {mydata.map((c)=>{
            return(
                 <option id={c}>this:{c}</option>
           )
        })}
        </select>
        </Fragment>
    )
}
export default Myaboutpage