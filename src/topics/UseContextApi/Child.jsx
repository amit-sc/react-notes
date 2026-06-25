import React, { useContext } from 'react'
import GrandChild from './GrandChild'
import { GlobalContext } from './UseContextApi'

const Child = () => {

    const result = useContext(GlobalContext)
    console.log(result)

  return (
    <div>
        <h1>Child</h1>
      {/* <GrandChild/> */}
    </div>
  )
}

export default Child
