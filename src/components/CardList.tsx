import React from 'react'
import { IRobot } from '../App'
import { Card } from './Card'

export const CardList = ({ robots }: { robots: Array<IRobot> }) => {
  return (
    <div>
      {robots.map(robot => <Card key={robot.id} robot={robot} />)}
    </div>
  )
}