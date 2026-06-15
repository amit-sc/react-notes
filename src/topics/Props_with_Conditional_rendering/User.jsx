
const User = (props) => {
    
    const {data:{username, age, email, bike}} = props
    console.log(username)

  return (
    <div>

        <h1>{username}</h1>
        {
            // conditional rendering with props (using logical and "&&")
            bike && <img src={bike} alt={username} width={300}/>
        }
        <hr />
    </div>
  )
}

export default User
