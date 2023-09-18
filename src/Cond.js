import React, { Fragment } from "react";
    
export function Home()
{
    // const a= ""
    const a = 50;
    const first ="this is shakti";
    return(
        <Fragment>
         {first}
         {20+56}
         {a ? "ok" : "no"}
        </Fragment>
    )
}