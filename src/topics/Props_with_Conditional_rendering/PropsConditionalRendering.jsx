import User from "./User"

const PropsConditionalRendering = () => {

    let data = [
        {
            username: "sundari", 
            age: 20, 
            email: "sundari@gmail.com", 
            bike: "https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/himalayan/hotspot/new/royal-enfield-himalayan-highlights-eu.png"
        },
        {
            username: "mala", 
            age: 24, 
            email: "mala@gmail.com", 
            bike: null
        },
        {
            username: "mala", 
            age: 24, 
            email: "mala@gmail.com", 
            bike: "https://www.team-bhp.com/sites/default/files/styles/check_extra_large_for_review/public/Screenshot%202025-11-04%20181022.jpg"
        }
    ]

    return(
        <div>
            {/* <h1>Props With Conditional Rendering</h1> */}

            {
                data.map((ele) => {
                    return <User data={ele}/>
                })
            }
        </div>
    )
}

export default PropsConditionalRendering