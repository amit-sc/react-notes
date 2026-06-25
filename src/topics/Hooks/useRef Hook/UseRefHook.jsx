import React, { useRef } from 'react'

const UseRefHook = () => {

    const h1ref = useRef()
    console.log(h1ref)

    const changeColor = () => {
        h1ref.current.style.backgroundColor = "red"
    }

    const boxref = useRef()
    const onOffBtn = useRef()
    const onOffBox = () => {
        if(boxref.current.style.backgroundColor == "white"){
            boxref.current.style.backgroundColor = "yellow"
            onOffBtn.current.innerText = "OFF"
        } 
        else{
            boxref.current.style.backgroundColor = "white"
            onOffBtn.current.innerText = "ON"
        }
    }


    const visibleBox = useRef()
    const onBtn = useRef()
    const offBtn = useRef()

    const onBox = () => {
        visibleBox.current.style.visibility = "visible"
    }

    const offBox = () => {
        visibleBox.current.style.visibility = "hidden"
    }

  return (
    <div>
        <h1 ref={h1ref}>Use Ref Hook</h1>
        <button onClick={changeColor}>Click</button>

        <div ref={boxref} style={{width: "100px", height: "100px", marginTop: "100px",borderRadius: "50%", backgroundColor: "white", border: "2px solid black"}}></div>
        <button onClick={onOffBox} ref={onOffBtn}>ON</button>


        <div ref={visibleBox} style={{width: "100px", height: "100px", marginTop: "100px",borderRadius: "50%", backgroundColor: "violet", border: "2px solid black"}}></div>
        <button onClick={onBox} ref={onBtn}>ON</button>
        <button onClick={offBox} ref={offBtn}>OFF</button>
    </div>
  )
}

export default UseRefHook
