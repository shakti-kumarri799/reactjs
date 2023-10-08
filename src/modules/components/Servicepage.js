import React from "react";
import Mysidebar from '../share/Mysidebar';
import { Outlet } from "react-router-dom";

function Servicepage(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h1>myservicepage</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                <Mysidebar/>
                </div>
            <div className="col-md-10">
                    <h1 className="text-danger">content page</h1>
                    <Outlet></Outlet>
                </div>
            </div>
            </div>
        
    )
}
export default Servicepage