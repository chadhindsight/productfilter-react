import { useState, createContext } from 'react'
import './App.css'

// Initial state to be used in App
const initialState = {
  products: [],
  filteredProducts: [],
  cartItems: [],
  searchTerm: "",
  selectedCategories: [],
};


function appReducer(state, action) {
  // Reducer functions that will be used to update state when needed

}

// Create the Context 
export const AppContext = createContext();

function App({ children}) {
  // initialize state
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{  }}>
      {children}
    </AppContext.Provider>
  );
}

export default App
