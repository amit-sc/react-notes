import React from 'react'
import { useRef } from 'react'

const UncontrolledForm = () => {


    const usernameRef = useRef()
    const ageRef = useRef()
    const handleForm = (e) => {
        e.preventDefault()
        console.log(usernameRef.current.value)
        usernameRef.current.value = ""
        console.log(ageRef.current.value)
        ageRef.current.value = ""
    }


  return (
    <div>
      <h1>Uncontrolled Form</h1>
      <form onSubmit={handleForm}>
        <input ref={usernameRef} className='border-black border-2' type="text" placeholder='username'/><br />
        <input ref={ageRef} className='border-black border-2' type="number" placeholder='enter age'/><br />
        <button className='border-black border-2'>Submit</button>
      </form>
    </div>
  )
}

export default UncontrolledForm
