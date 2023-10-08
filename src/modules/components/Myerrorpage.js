import React from "react";

const error="https://th.bing.com/th/id/OIP.dK6bYmtLRrh43RW4JfdzkgHaDm?w=338&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"

const w=500;

function Myerrorpage(){
    return(
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <h1 className="error">404</h1>
                    <h3>page not found</h3>
                    <img src={error} width={w} alt="error page" />
                </div>
            </div>
         </div>
    )
}
export default Myerrorpage