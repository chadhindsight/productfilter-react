import { Cart } from './components/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from './components/NavBar';
import ProductList from './components/productComponents/ProductList';
import { SidePanel } from './components/SidePanel';
import { Footer } from './components/Footer';


function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar />
        <Routes>
        <Route
        path="/"
        element={
          <main className='main-content'>
          <SidePanel />
        <ProductList className='product-wrapper' />
        </main>
        }
        >
          
        </Route>
        <Route path="/cart" element={<Cart />} />
        </Routes>  
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App
