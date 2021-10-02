import React from 'react'

export const Card = ({ robot }) => {
  return (
    <div className='w-20 bg-washed-yellow tc dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img
        alt='robot'
        src={`https://robohash.org/${robot.id}?size=200x200`}
        width={200}
        height={200}
      />
      <div>
        <h2>{robot.name}</h2>
        <p>{robot.email}</p>
      </div>
    </div>
  )
}