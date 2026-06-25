import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {


    const [count, setCount] = useState(0)
    const [val, setVal] = useState(0)
    
    const updateCount = () => {
        setCount(count+1)
    }
    


    //! syntax : useEffect(callback, dependency)

    /// Type 1 : useEffect(callback)
    // It will execute every time 
    
    // useEffect(() => {
    //     console.log("hello")
    // })


    /// Type 2 : useEffect(callback, []) with empty dependency
    // it execute only one time (i.e. in the initial load)

    // useEffect(() => {
    //     console.log("hii")
    // },[])


    /// Type 3 : useEffect(callback, [dependency]) with  dependency
    // if the dependency value changes the callback function will execute
    useEffect(() => {
        console.log("hola")
    },[count])


  return (
    <div>
        <h1>{count}</h1>
        <button onClick={updateCount}>click</button>
        <hr />
        <h1>{val}</h1>
        <button onClick={()=>{setVal(val+1)}}>click</button>
    </div>
  )
}

export default UseEffectHook
