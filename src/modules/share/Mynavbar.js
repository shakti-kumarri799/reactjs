
import React from "react";
import { Link } from 'react-router-dom';
 
function Mynavbar(){
    return(
        // <div>navbar</div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="ss">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="myabout">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="mycontactus">Contact</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link" to="myaxios">Axios</Link>
           </li>
           <li className="nav-item">
         <Link className="nav-link" to="myservice">Service</Link>
           </li>
           <li className="nav-item">
         <Link className="nav-link" to="mygraph">Graph</Link>
           </li>
           <li className="nav-item">
         <Link className="nav-link" to="lazyloding">Lazy</Link>
           </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Link</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link> */}
          {/* <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="ss">Action</Link></li>
            <li><Link className="dropdown-item" to="s">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="ss">Something else here</Link></li>
          </ul> */}
        {/* </li> */}
        <li className="nav-item">
          <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
        </li>
      </ul>
      <form className="d-flex me-5" role="search">
        <div className="dropdown me-3">
         <a href="#" className="d-flex align-items-center text-decoration-none dropdown-toggle show" data-bs-toggle="dropdown" aria-expanded="true">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
       <strong>username</strong>
        </a>
       <ul className="dropdown-menu dropdown-menu-light text-small shadow" data-popper-placement="top-start" >
        <li><a className="dropdown-item" href="#">Login</a></li>
       <li><Link className="dropdown-item" to="registor">Registor</Link></li>
        <li><Link className="dropdown-item" to="/">Sign out</Link></li>
       </ul>
      </div>
      </form>
       
    </div>
  </div>
</nav> 
                </div>
            </div>
        </div>
    )
}
export default Mynavbar