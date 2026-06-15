import { useState } from "react"

const UseStateHooks = () => {

    // top level
    // const data = useState()
    // console.log(data)
    // const[x,y]=data
    // console.log(x)
    // console.log(y)

    // syntax
    //! coust [initial_value, update_function] = useState(initial value)

    const [count, setCount] = useState(0)

    const updateCount = () => {
        setCount(count+1)
    }


  return (
    <div>
      <h1>UseStateHooks</h1>
      <h1>{count}</h1>
      <button onClick={updateCount}>Update Count</button>
    </div>
  )
}

export default UseStateHooks
