//! Conditional Rendering

/*

2 ways
1. ternary operator (condition ? true : false)
2. short circuit logical AND (condition && true)
    - if condition in LHS is true it will execute RHS
3. nullish operator (condition ?? true)
    - it will execute if condition is null or undefined
4. Optional Chaining (condition ?. true)
    - if the condition variable is null or undefined it will not execute
5. Short Circuit Logical OR (varible = true || default value)
    let value = null
    let res = value || 0;   // shown in objects NOde js programming
    console.log(res)


Diff b/w nullish operator and optional chaining
*/



const ConditionalRendering = () => {

    // let status = true; 
    // let status = null; 
    // let status = "abc"; 
    let status = null; 
    let data = [1,2]


    // Short Curcit Logical OR (example)
    let value = null
    let res = value || 0;
    console.log(res)

  return (
    <div>
      <h1>Conditional Rendering</h1>
      {
        // way 1 - ternary operaor
        status === true ? <h1> way 1 True 💖</h1> : <h1>way 1 False 💔</h1>
      }
      {
        // way 2 - short curcuit logical AND (cond. && true)
        status && <h1> Way 2 True 💖</h1>
      }
      {
        // way 3
        status ?? <h1> way 3True 💖</h1>
      }
      {
        // way 4
        status?.map(() => {
            <h1>hii</h1>
        })
      }
    </div>
  )
}

export default ConditionalRendering
