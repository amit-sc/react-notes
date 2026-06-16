import { useState } from "react"
import Child from "./Child"

const UseStateHooks = () => {

    // top level
    // const data = useState()
    // console.log(data)
    // const[x,y]=data
    // console.log(x)
    // console.log(y)

    // syntax
    //! coust [initial_value, update_function] = useState(initial value)


    // 
    // const [count, setCount] = useState(0)

    // const updateCount = () => {
    //     setCount(count+1)
    // }




    // When we update somehting the Whole Component will rerender. that includes a child component as well as grandchild component
    
    const [count, setCount] = useState(0)
    
    console.log("hii")
    const updateCount = () => {
        setCount(count+1)
    }
    console.log("hello")


    // const [user,setUser] = useState(null)

    // const fetchData = async () => {
    //     const data = await fetch("https://api.github.com/users")
    //     const result = await data.json()
    //     setUser(result)
        
    // }

    // fetchData()
    // console.log(user)





  return (
    <div>
      <h1>UseStateHooks</h1>
      <h1>{count}</h1>
      <Child/>
      <button onClick={updateCount}>Update Count</button>
    </div>
  )
}

export default UseStateHooks
