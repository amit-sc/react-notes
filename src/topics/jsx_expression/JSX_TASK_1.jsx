// TASK 1 - define a string, number,boolean, array, object in JS section. And show it in JSX(html)/return section.

const JSX_TASK = () => {

    let num = 10
    let str = "Amit Shree Chandan"
    let bool = true
    let arr = ["amit","sumit","sunil",'mohit']
    let obj = {
        name: "amit",
        age: 23,
        gender: "male"
    }

    return (
        <div>
            <p>Number : {num}</p>
            <p>String : {str}</p>
            <p>{bool ? "true statement" : "false statement"}</p>
            <p>Array : </p>
            <ul>
                {
                    arr.map((ele, id) => {
                        return <li key={id}>{ele}</li>
                    })
                }
            </ul>
            <p>Array: {arr.join(" ")}</p>
            <p>Object: {Object.entries(obj)}</p>    
        </div>
    )
}

export default JSX_TASK