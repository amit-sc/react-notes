import React, { useState } from 'react'

const Section = () => {

    const[cardData, setCardData] = useState({
        username : "sundari",
        age: 23,
        // img_url: "https://placehold.co/1920x1080",
        img_url: "https://static.vecteezy.com/system/resources/thumbnails/050/393/628/small/cute-curious-gray-and-white-kitten-in-a-long-shot-photo.jpg"
    })

    const change_Image = () => {
        // alert("Image is Changed")
        const url = prompt("Enter your image url ")
        setCardData({...cardData, img_url:url})
    }

    const change_Name = () => {
        // alert("Name is Changed")
        const name = prompt("Enter your new Name ")
        setCardData({...cardData, username:name})
    }

    const change_Age = () => {
        // alert("Age is Changed")
        const age = prompt("Enter your new Age ")
        setCardData({...cardData, age:age})
    }

  return (
    <div style={{width: '300px', height: '300px', borderRadius: "12px", backgroundColor: "#f7f7f7", margin:"20px", boxShadow: "0px 0px 15px 5px grey"}}>

        {/* background image  */}
        <div style={{width: "100%", height: "55%", backgroundColor: "lightgray", backgroundImage: `url(${cardData.img_url})`, backgroundSize:"cover", borderRadius:"4px"}}></div>


        {/* User Details */}
        <div style={{width:"100%", height:"30%", display: "flex", flexDirection:"column", alignItems: "center", justifyContent:"center"}}>
            <h1 style={{textAlign: "center"}}>{cardData.username}</h1>
            <p style={{textAlign: "center"}}>Age : {cardData.age}</p>
        </div>


        {/* buttons  */}
        <div style={{width:"100%", height:"15%", display: "flex", alignItems:"center", justifyContent: "center", gap:"10px",}}>
            <button onClick={change_Image}>Change Image</button>
            <button onClick={change_Name}>Change Name</button>
            <button onClick={change_Age}>Change Age</button>
        </div>
    </div>
  )
}

export default Section
