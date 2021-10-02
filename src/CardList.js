import React from 'react'
import { Card } from './Card'

export const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map(robot => <Card key={robot.id} robot={robot} />)}
    </div>
  )
}