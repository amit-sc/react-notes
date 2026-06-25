import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'

const Home = () => {

    const [products, setProducts] = useState(null)
    const fetchData = async () => {
        const {data} = axios.get("https://fakestoreapi.com/products")
        console.log(data)
    }

    useEffect(() => {
        fetchData()
    },[])

  return (
    <div>
        <div className='w-full h-[89px] flex flex-wrap gap-[100px] justify-around pt-[100px]'></div>

        {
            !products ? <h1>Loading ...</h1> : products.map(ele => {
                return <Card/>
            })
        }
      
    </div>
  )
}

export default Home
