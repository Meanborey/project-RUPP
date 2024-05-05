import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Homepage from './page/Homepage';
import Aboutpage from './page/about/Aboutpage'
import Computer from './page/computer/Computer'
import Phone from './page/phone/Phone'
import ProductDetail from './page/ProductDetail/ProductDetail'
import Admin from './components/Admin';
import AllProducts from './page/all Products/AllProducts';

// import Subhomepage from './components/subhomepage';

export default function App() {
  return (
    <div className="App ">
      
      {/* <Homepage/> */}


        {/* <BrowserRouter>  
          <Routes>
            <Route path="/homepage" element={ <Homepage /> } />
            <Route path="/computer" element={ <Computer /> } />
            <Route path="/phone" element={<Phone/>}/>
            <Route path="/about" element={ <Aboutpage /> } />
            <Route path="/admin" element={<Admin/>}/>
            <Route path="*" element={ <h1>Not Found</h1> } />
          </Routes>
        </BrowserRouter> */}

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage/>} />
    <Route path="/computer" element={<Computer />} />
    <Route path="/phone" element={<Phone />} />
    <Route path="/about" element={<Aboutpage />} />
    <Route path="/admin" element={<Admin />} />
    <Route path="/allProducts" element={<AllProducts />} />
    <Route path="/product/:productId" element={<ProductDetail />} />
  </Routes>
</BrowserRouter>

    </div>
  );
}