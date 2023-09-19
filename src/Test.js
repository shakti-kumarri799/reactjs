import reactjs, { Fragment } from "react";

function Abc()
{
    return "welcom to react js";
}
export default Abc

export function Abcd()
{
    return "this is name export function";
}

export function Xyz()
{
    return <div><h1>heading one</h1> <h2>sdfsdfhjsdhfjsdhfjh sjdhfjshd</h2></div>;    
}



//     )

// }
// export function Contactus()
// {
//     return(
//         <section>
//         <h1>heading one</h1>
//         <h2>heading two</h2>
//         <p>this is love</p>
//         </section>
//     )

// }
export function Contactus()
{
    return(
        <Fragment>
        <h1>heading one</h1>
        <h2>heading two</h2>
        <p>this is love</p>
        </Fragment>
    )

}
// export function Contactus()
// {
//     return(
//         <>
//         <h1>heading one</h1>
//         <h2>heading two</h2>
//         <p>this is love</p>
//         </>
//     )

// }
// react wrap element eend//
    export function About()
    {

     const a=80;
      
        return(
            <Fragment>
                <h1>shakti</h1>
                <h2 style={{color:'red',backgroundColor:'blue',fontSize:`${a}px`}}>chamcham</h2>
                <p className="head">this is my system</p>
            </Fragment>
        )
    }


