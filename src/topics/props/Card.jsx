import './Card.css'

const Card = (props) => {

  return (
    <div className="card">

      <div className="img_container">
        <div className="color_box"></div>
        <img src="https://placehold.co/150x150" alt="" />
      </div>

      <div className="text_container">
        <h4>Name : {props.user.username}</h4>
        <p>Age : {props.user.age}</p>
        <p>Gender : {props.user.gender}</p>
        <p>Mail_ID : {props.user.email}</p>
      </div>
    </div>
  )
}
export default Card
