import { useState, createContext } from 'react'
import { products } from './products.js';

// Initial state to be used in App
const initialState = {
  products,
  filteredProducts: [],
  cartItems: [],
  searchTerm: "",
  selectedCategories: [],
};

console.log(initialState)
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