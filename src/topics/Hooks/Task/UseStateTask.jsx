import { useState } from "react"
import Card from "./Card"
import "./Card.css"


const UseStateTask = () => {
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        const data = await fetch("https://api.github.com/users")
        const res = await data.json()
        setUsers(res)
    }
    console.log(users)


  return (
    <div>
        <button onClick={fetchUsers}>click me</button>

        <div className="user_info">
        {
            users?.map((ele) => {
                return <Card key={ele.id} user={ele} />
            })
        }
        </div>
    </div>
  )
}

export default UseStateTask
