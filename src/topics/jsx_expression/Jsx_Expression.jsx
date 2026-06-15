// JSX EXPRESSSION
// It allow to access JavaScript variables inside HTML (in return block) using curly braces "{variable_name}".

const Jsx_Expression = () => {

    let username = "Amit Shree Chandan"
    let age = 23
    let email = "amitshreechandan@gmail.com"

    return(
        <div>
            <h1>Jsx_Expression</h1>
            <h2>Hello {username}</h2>
            <h2>Age: {age}</h2>
            <h2>Email: {email}</h2>
        </div>
    )
}
export default Jsx_Expression