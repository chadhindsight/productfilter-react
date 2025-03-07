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

}

// Create the Context 
export const AppContext = createContext();