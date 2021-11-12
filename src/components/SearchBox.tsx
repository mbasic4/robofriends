import React from 'react'

interface SearchBoxProps {
  searchField: string
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchBox = ({ searchField, onSearchChange }: SearchBoxProps) => {
  return (
    <div className='pa2'>
      <input
        aria-label='search-robots'
        className='pa3 ba b--green bg-washed-yellow'
        type='search'
        placeholder='Search robots...'
        value={searchField}
        onChange={onSearchChange}
      />
    </div>
  )
}
