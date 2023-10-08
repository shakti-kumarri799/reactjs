import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App; 

import { BrowserRouter,Route,Routes } from 'react-router-dom';
import "./modules/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Mynavbar from './modules/share/Mynavbar';
import Myerrorpage from './modules/components/Myerrorpage';
import Myaboutpage from './modules/components/Myaboutpage';
import Mycontactus from './modules/components/Mycontactus';
import Mylanding from './modules/components/Mylanding';
import Myaxious from './modules/components/Myaxious';
import Mygraphpage from'./modules/components/Mygraphpage';
import ProductDetails from'./modules/components/ProductDetails';
import Registorpage from './modules/auth/Registorpage';
import Servicepage from './modules/components/Servicepage';
import Buymobilepage from './modules/components/subrouting/Buymobilepage';
import Replacepage from './modules/components/subrouting/Replacepage';
const Mylazym = Lazy(()=>import('./modules/components/Lazyloadingpage'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <Mynavbar/>
      <Routes>
        <Route path='' element={<Mylanding/>}></Route>
        <Route path='myabout' element={<Myaboutpage/>}/>
        <Route path='mycontactus' element={<Mycontactus/>}/>
        <Route path='myaxios' element={<Myaxious/>}/>
        <Route path='myaxios/details/:id' element={<ProductDetails/>}/>
        <Route path='mygraph' element={<Mygraphpage/>}/>
        <Route path='registor' element={<Registorpage/>}/>
        <Route path='myservice' element={<Servicepage/>}>
        <Route path='replace' element={<Replacepage/>}/>
        <Route path='buymobile'    element={<Buymobilepage/>}/>
        <Route path='*' element={<Myerrorpage/>}/>
        </Route>
        <Route path='lazyloading' element={
          <Suspense fallback={<h1 style={{color:'red',backgroundColor:'blue',textAlign:'center',position:'absolute',top:'300px'}}>Loading</h1>}>
            <Mylazym/>
          </Suspense>
        }></Route>
        
      <Route path='*' element={<Myerrorpage/>}/>
      </Routes>
      </BrowserRouter>
     </React.StrictMode>
);

// If you want to start measuring performance in your app,0 pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals//

