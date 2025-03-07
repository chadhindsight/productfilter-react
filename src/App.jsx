import { useState, createContext } from 'react'
import './App.css'

export const AppContext = createContext();

function App({ children}) {

  return (
    <AppContext.Provider value={{  }}>
      {children}
    </AppContext.Provider>
  );
}

export default App
