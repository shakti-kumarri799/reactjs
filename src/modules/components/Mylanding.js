
import React, { useState, useEffect} from "react";

function Mylanding(){
    
    
        const [svariable, sfunction]=useState(10)
        const myfunction = ()=>{
         alert("welcom to react js");
         sfunction(2000);
        }
        // usestate is a button /
        const [dcolor, ccolor]=useState("orange");
        const changebackground=(p)=>{
            console.log(p.target.value);
            ccolor(p.target.value);

         

        }
        const a = ()=>{
            console.log("this is onload function of javascript");
         }
         
         useEffect(()=>{
           a();
           
         })
         

    return(
        <div>
        <h1>landing</h1>
        <img src="photos/image4.jpg.jpg" width="1000" height="300" alt="rty"/>
        <button type='button' onClick={myfunction}>alert fucntion</button>
        <h2>display {svariable}</h2>
        
        
         <input type="color" onInput={changebackground}/>
         <div style={{width: '500px', height: '500px',border: '2px solid blue', backgroundColor:`${dcolor}`}}>changeback
         </div>
         </div>
    )

}

export default Mylanding