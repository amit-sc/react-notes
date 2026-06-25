import React, { useState } from 'react'

const LoadingAnimation = () => {

    const [data, setData] = useState(null)
    setTimeout(() => {
        setData(true)
    },5000)

  return (
    <div>
        {
            !data ? <h2>Loading . . .</h2> : <div>data</div>
        }
    </div>
  )
}

export default LoadingAnimation
