import React from 'react'
import { IRobot } from '../App'

export const Card = ({ robot }: { robot: IRobot }) => {
  const { id, name, email } = robot
  return (
    <div className='w-20 bg-washed-yellow tc dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img
        alt='robot'
        src={`https://robohash.org/${id}?size=200x200`}
      />
      <div>
        <h2 style={{ whiteSpace: 'nowrap' }}>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}