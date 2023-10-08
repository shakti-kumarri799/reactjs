import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Myaxious() {
    const [svariale, abcfunc] = useState([])

    const myapi = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then((s) => {
            console.log(s.data);
            abcfunc(s.data);

        })
    }
    // its directly updating DOM &its always accepts two argu.like optional
        useEffect( ()=>{
        myapi()
        },[])
        
    

    
    
    return (
        
        <div>
            <button type="button" onClick={myapi}>get data</button>
            <div className='container'>
                <div className='row'>
                    {svariale.map((s) => {
                        return (
                          
                            <div className='col-md-3' key={s.id}>
                                <div className="card">
                                    <div className="card-body">
                                        <h2 className="card-title">{s.id}</h2>
                                        <h5 className="card-title">{s.title}</h5>
                                        <p className="card-text">{s.userid}</p>
                                       <a href="#" className="btn btn-primary">{s.completed === true ? "Yes" : "No"}</a>
                                        <Link to={`details/`+s.id}>vew details</Link>
                                    </div>
                                </div>
                            </div>

                        )
                    })}



                </div>
            </div>
        </div>
    )

}
export default Myaxious