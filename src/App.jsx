import ConditionalRendering from "./topics/Conditional_Rendering/ConditionalRendering"
import FragmentsConcept from "./topics/Fragments/Fragments_Concept"
import UseStateTask from "./topics/Hooks/Task/UseStateTask"
import UseStateHooks from "./topics/Hooks/UseStateHooks"
import Jsx_Expression from "./topics/jsx_expression/Jsx_Expression"
import Jsx_Rules from "./topics/jsx_expression/Jsx_Rules"
import JSX_TASK from "./topics/jsx_expression/JSX_TASK_1"
import Props_Home from "./topics/props/Props_Home"
import PropsConditionalRendering from "./topics/Props_with_Conditional_rendering/PropsConditionalRendering"


const App = () => {

    // javascript code 
    console.log("App file")
    
    return (
        // jsx code
        <div id="App">
            {/* <Jsx_Expression/> */}
            {/* <Jsx_Rules/> */}
            {/* <JSX_TASK/> */}
            {/* <Props_Home/> */}
            {/* <ConditionalRendering/> */}
            {/* <PropsConditionalRendering/> */}
            {/* <FragmentsConcept/> */}
            <UseStateHooks/>
            <UseStateTask/>
        </div>
    )
}

export default App