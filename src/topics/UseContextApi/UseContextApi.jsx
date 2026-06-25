import React, { createContext } from 'react'
import Parent from './Parent'
import Child from './Child'

export const GlobalContext = createContext()

const UseContextApi = () => {

    const data = {
        username : "sundari",
        age: 23,
        gender : "Female",
        education : "B.Tech",
        place : "AP",
        college : "JNTU Anantapuram",
        batch : "2025"
    }

  return (
    <div>
      {/* <Parent/> */}

      <GlobalContext value={data}>
        <Parent/>
        <Child/>
      </GlobalContext>
      
      {/* <Child/> */}
    </div>
  )
}

export default UseContextApi
