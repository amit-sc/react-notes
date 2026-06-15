const Child = (props) => {
    
    console.log(props) 
    const {name = "default"} = props
    
    return (
        <div>
        <h1>My name is {name.toUpperCase()}</h1>
        </div>
    )
}
export default Child