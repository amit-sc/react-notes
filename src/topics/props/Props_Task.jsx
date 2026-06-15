import Card from "./Card"

const Props_Task = () => {

    const data = [
        {username: "sundari", age:23, gender:"female", email:"sundari@gmail.com"},
        {username: "mala", age:23, gender:"female", email:"mala@gmail.com"},
        {username: "leela", age:23, gender:"female", email:"leela@gmail.com"},
        {username: "amit", age:23, gender:"male", email:"amit@gmail.com"},
        {username: "sumit", age:23, gender:"male", email:"sumit@gmail.com"},
        {username: "rohit", age:23, gender:"male", email:"rohit@gmail.com"},
        {username: "mohit", age:23, gender:"male", email:"mohit@gmail.com"},
        {username: "sunil", age:23, gender:"male", email:"sunil@gmail.com"},
        {username: "rekha", age:23, gender:"female", email:"rekha@gmail.com"},
        {username: "jaya", age:23, gender:"male", email:"jayaa@gmail.com"},
    ]
  return (
    <div className="content">
        <h1>User Data</h1>
        <div className="card_content">
          {
            data.map((ele) => {
                return <Card user={ele} />
            })
          }
        </div>
    </div>
  )
}

export default Props_Task
