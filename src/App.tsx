import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Navbar from './components/Navbar/Navbar';
import AddProduct from './pages/AddProduct/AddProduct';
import Login from './pages/Login/Login';

function App(): ReactElement {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={ <Homepage/> } />
        <Route path='/product/:id' element={ <ProductDetail/> } />
        <Route path='/product/add' element={ <AddProduct/> } />
        <Route path='/login' element={ <Login/> } />
      </Routes>
    </>
   
  );
}

export default App;
