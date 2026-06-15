// import Child from "./Child"
// import Parent from './props/Parent'
import Parent from "./Parent"
import Props_Task from "./Props_Task"

const Props_Home = () => {
    console.log("Props home")
    return(
        <div>
            {/* <Parent/> */}
            <Props_Task/>
        </div>
    )
}
export default Props_Home