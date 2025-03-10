import { useState, createContext, useContext, useReducer } from 'react'
import { products } from './products.js';

// Initial state to be used in App
const initialState = {
  products,
  filteredProducts: [],
  cartItems: [],
  searchTerm: "",
  selectedCategories: {
    cameras: false,
    smartphones: false,
    games: false,
    televisions: false
  },
};


function appReducer(state, action) {
  // Reducer functions that will be used to update state when needed
  switch(action.type){
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };

    case "SET_FILTERED_PRODUCTS":
      return { ...state, filteredProducts: action.payload };

    case "SET_CART_ITEMS":
      return { ...state, cartItems: action.payload };

    case "SET_SEARCH_TERM":
      return { ...state, searchTerm: action.payload };

    case "SET_SELECTED_CATEGORIES":
      return { ...state, selectedCategories: action.payload };

    // add items to cart
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      }
    
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(product => product.id !== action.payload.id)
      }

    default:
    return state;  
  }
}


// Create the Context 
export const AppContext = createContext();

export const useAppContext = () =>{
  const establishedContext = useContext(AppContext);

  if(!establishedContext){
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return establishedContext
}

export const AppProvider = ({ children }) => {
  // Initialize the reducer with the initial state
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Provide the state and dispatch function to the context
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};