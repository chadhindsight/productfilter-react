import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar';
import ProductList from './components/productComponents/ProductList';


function App({ children}) {

  return (
    <>
      <NavBar />
      <ProductList />
    </>
  );
}

export default App
