// JSX EXPRESSION RULES
/*
JSX EXPRESSION - curly braces inside return block. {}

Rule 1  - We can't declare JS variables inside JSX Expression but we can access it.
        - We can reinitilaize inside JSX Epression
Rule 2  - We can't use conditional statements like if, if-else, switch as 
        - if block has a curly brace (like if(){}) and react will get confused.
        - but we can use ternary operator
Rule 3  - We Can't use Loops like for, while, do-while, for-in, for-of bcuz they also have curly braces
        - We can only use map()
*/

const Jsx_Rules = () => {

    let userName = "amit"

    if(true){
        console.log("It is true")
    }
    else{
        console.log("It is flase ")
    }

    let theme = false;

    let arr = ["amit","sumit","rohit","rahul","punit"]

    return(
        <div>
            <h1>JSX Rules</h1>
            {
                // jsx expression
                // we can access the js but we can't create the js
                userName = "Sumit"


            }

            <h1>{userName}</h1>
            <button>{theme? "light" : "dark"}</button>

            {
                arr.map(ele => {
                    return (
                        <h1>{ele}</h1>
                    )
                })
            }


            <ol>
                {
                    arr.map(ele => {
                        return <li>{ele}</li>
                    })
                }
            </ol>
        </div>
    )
}

export default Jsx_Rules