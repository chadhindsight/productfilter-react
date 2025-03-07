import { useState } from 'react'
import './App.css'


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
