import React from 'react'
import './Table.css'


const Table = (props) => {

    const users = props.users

  return (
    <div style={{width:"92vw"}}>   
      <table border="1">
        
        <tr>
            <th>ID</th>
            <th>Login</th>
            <th>Avatar</th>
            <th>Profile URL</th>
            <th>Type</th>  
        </tr>
        
        {users && users.map((user) => (
            <tr >
              <td>{user.id}</td>
              <td>{user.login}</td>
              <td><img src={user.avatar_url} alt="user-image"/></td>
              <td><a href={user.url}>{user.url}</a></td>
              <td><a href={user.type}>{user.type}</a></td>

            </tr>
        ))}
      </table>
    </div>
  )
}

export default Table
