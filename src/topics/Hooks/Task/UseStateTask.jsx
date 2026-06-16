import { useState } from "react"


const UseStateTask = () => {
    const [users, setUsers] =useState(null)

    const fetchUsers = async () => {
        const data = await fetch("https://api.github.com/users")
        const res = await data.json()
        setUsers(res)
    }
    console.log(users)


  return (
    <div>
        {
            users?.map((ele) => {
                return(
                    <h1>ele.login</h1>       
                )
            })
        }
    </div>
  )
}

export default UseStateTask
