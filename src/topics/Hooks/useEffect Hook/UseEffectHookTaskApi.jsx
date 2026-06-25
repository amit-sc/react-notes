import React, { useEffect, useState } from 'react'

const UseEffectHookTaskApi = () => {

    const [count, setCount] = useState(0)
    const fetchData = async () => {
        const data = await fetch("https://fakestoreapi.com/products")
        const res = await data.json()
        console.log(res)
    }
    useEffect(() => {
        fetchData()
    },[])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>update</button>
    </div>
  )
}

export default UseEffectHookTaskApi
