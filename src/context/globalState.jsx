import { createContext, useContext, useEffect, useReducer } from 'react'

// Initial state to be used in App
const initialState = {
  products: [],
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

    case "TOGGLE_CATEGORY":
    return { 
      ...state, 
      selectedCategories: {
        ...state.selectedCategories,
        [action.payload]: !state.selectedCategories[action.payload]
      }
    };

    case "SET_CART_ITEMS":
      return { ...state, cartItems: action.payload };

    case "SET_SEARCH_TERM":
      return { ...state, searchTerm: action.payload };

    case "SET_SELECTED_CATEGORIES":
      return { ...state, selectedCategories: action.payload };

    case "ADD_TO_CART":
      const existingCartItem = state.cartItems.find(
        (item) => item.product.id === action.payload.id
      );
    
      if (existingCartItem) {
        // If the product already exists in the cart, increment its quantity
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.product.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // If the product doesn't exist in the cart, add it with a quantity of 1
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            { product: action.payload, quantity: 1 },
          ],
        };
      }
    
      case "REMOVE_FROM_CART":
        const itemExists = state.cartItems.find(
          (item) => item.product.id === action.payload.id
        );
        
        // handles cases where product is not in cart
        if(!itemExists) return state

        if (itemExists.quantity > 1) {
          // If the quantity is greater than 1, decrement the quantity
          return {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item.product.id === action.payload.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          };
        } else {
          // If the quantity is 1, remove the product from the cart
          return {
            ...state,
            cartItems: state.cartItems.filter(
              (item) => item.product.id !== action.payload.id
            ),
          };
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
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Fetch products from the Flask API when the component mounts
  useEffect(() => {
    fetch('https://productfilter-backend.onrender.com/api/products')
      .then(response => response.json())
      .then(data => {
        console.log('it a tape?')
        dispatch({ type: 'SET_PRODUCTS', payload: data });  // Dispatch action to update products in state
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        
      });
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};