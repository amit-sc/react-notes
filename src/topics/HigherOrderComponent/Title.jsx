import React from 'react'

const Title = ({children, color, visibility}) => {
  return (

    <div>
      {
        !visibility ? <div>Your Request Can;t be Processed ...</div> :
        <div>
          <h1 style={{backgroundColor:`${color}`}}>Card Title</h1>
            {
              children
            } 
        </div>
      }
    </div>
  )
}

export default Title
