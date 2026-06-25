import React, { useContext } from 'react'
import Child from './Child'
import { GlobalContext } from './UseContextApi'

const Parent = () => {

    const result = useContext(GlobalContext)
    console.log(result)

  return (
    <div>
        <h1>Parent</h1>
      {/* <Child/> */}
    </div>
  )
}

export default Parent
