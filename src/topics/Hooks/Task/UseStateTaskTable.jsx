import { useState } from "react"
import Table from "./Table"
import "./Table.css"


const UseStateTaskTable = () => {
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
            <Table users={users} />
        </div>
    </div>
  )
}

export default UseStateTaskTable
