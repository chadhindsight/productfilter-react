import { Cart } from './components/Cart';
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
        <Cart />
        </section>
      </main>
    </>
  );
}

export default App
