import Child from "./Child"

const Parent = () => {
    // console.log("Parent Function")
    const data = ["sundari",'leela','mala']
    return(
        <div>
            <Child/>
            <Child name="sundari"/>
            <Child name="leela"/>
            <Child name="mala"/>
        </div>
    )
}
export default Parent