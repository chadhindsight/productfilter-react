import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar';
import ProductList from './components/productComponents/ProductList';
import { SidePanel } from './components/SidePanel';


function App({ children}) {

  return (
    <>
      <NavBar />
      <SidePanel />
      <ProductList />
    </>
  );
}

export default App
