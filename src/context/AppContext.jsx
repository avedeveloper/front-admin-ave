import { createContext, useState } from "react";

const AppContext = createContext()

const AppProvider = ({children}) => {

  const [sidebarOpen, setSidebarOpen] = useState(true)

  const [loading, setLoading] = useState(true);

  return(
    <AppContext.Provider value={{sidebarOpen, setSidebarOpen, loading, setLoading}}>
        {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider } 