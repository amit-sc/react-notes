

const Card = (props) => {

  const user = props.user

  return (
    <div className="info_box">
        <img src={user.avatar_url} />
        <h3>Name: {user.login}</h3>
    </div>
  )
}

export default Card
