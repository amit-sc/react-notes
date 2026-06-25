import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Audio, CircularProgress, Oval, RotatingLines } from 'react-loader-spinner'

const AxiosConcept = () => {

    //! Without Axios Library (with fetch function)
    // const fetchData = async () => {
    //     const data = await fetch("https://fakestoreapi.com/products")
    //     const res = await data.json()
    //     console.log(res)
    // }

    //! with axios library
    const [products, setProducts] = useState(null)

    const fetchData = async () => {
        const {data} = await axios.get("https://fakestoreapi.com/products")
        // console.log(data)
        setTimeout(() => {
            setProducts(data)
        },2000)
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div>
      {/* <Audio/>
      <Oval/>
      <CircularProgress color='red'/>
      <RotatingLines color='blue'/>  */}
    {
      !products ? <RotatingLines/> : products.map((ele,index) => {
        return <h1>{ele.title}</h1>
      })
    }
    </div>
  )
}

export default AxiosConcept
