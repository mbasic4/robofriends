import React from 'react'

export const SearchBox = ({ searchField, onSearchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-washed-yellow'
        type='search'
        placeholder='Search robots...'
        value={searchField}
        onChange={onSearchChange}
      />
    </div>
  )
}
