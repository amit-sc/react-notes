import React, { createContext, useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'

export const GlobalContext = createContext()

const UseContextTask = () => {

    const [cart, setCart] = useState(0)
    console.log("global context")

  return (
    <div>
        <GlobalCOntext.Provider value={{cart, setCart}} >
            <Navbar/>
            <Home/>
        </GlobalCOntext.Provider>
    </div>
  )
}

export default UseContextTask
