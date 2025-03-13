// import './App.css'
import { NavBar } from './components/NavBar';
import ProductList from './components/productComponents/ProductList';
import { SidePanel } from './components/SidePanel';


function App({ children}) {

  return (
    <>
      <NavBar />
      <main style={{ display: "flex" }}>
        <SidePanel />
        <ProductList />
      </main>
    </>
  );
}

export default App
