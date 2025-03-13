// import './App.css'
import { NavBar } from './components/NavBar';
import ProductList from './components/productComponents/ProductList';
import { SidePanel } from './components/SidePanel';


function App({ children}) {

  return (
    <>
      <NavBar />
      <main className='main-content'>
        <SidePanel />
        <section>

        <ProductList className='product-wrapper' />
        </section>
      </main>
    </>
  );
}

export default App
