import React from 'react'
import Card from './Card'
import Title from './Title'

const HigherOrderComponent = () => {
  return (
    <div>
      <Title visibility={true}>
        <Card/>
      </Title>

      <br /><hr /><br />

      <Card/>
      
      <br /><hr /><br />

      <Title color="red" visibility={true}>
        <Card/>
      </Title>

      <br /><hr /><br />

      <Title color="green" visibility={false}>
        <Card/>
      </Title>

      <br /><hr /><br />

      <Title color="grey" visibility={true}>
        <Card/>
      </Title>

      <br /><hr /><br />

        <Title>         
            <Card/>
        </Title>

      <br /><hr /><br />

        <Title color="blue" visibility={true}>
            <Card/>
        </Title>

    </div>
  )
}

export default HigherOrderComponent
