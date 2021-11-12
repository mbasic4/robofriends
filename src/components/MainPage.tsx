import React, { Component } from 'react'

import { CardList } from './CardList'
import Scroll from './Scroll'
import { SearchBox } from './SearchBox'
import ErrorBoundary from './ErrorBoundary'
import Header from './Header'
import { IRobot } from '../App'

export interface MainPageProps {
  onRequestRobots: () => void
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  robots: Array<IRobot>
  searchField: string
  isPending: boolean
}

class MainPage extends Component<MainPageProps> {
  componentDidMount () {
    this.props.onRequestRobots()
  }

  filterRobots = () => {
    return this.props.robots.filter(robot =>
      robot.name.toLowerCase().includes(
        this.props.searchField.toLowerCase()
      )
    )
  }

  render() {
    const { searchField, onSearchChange, isPending } = this.props
    const filteredRobots = this.filterRobots()
    if (isPending) return <h1 className='tc'>Loading...</h1>
    return ( 
      <div className='tc'>
        <Header />
        <SearchBox
          searchField={searchField}
          onSearchChange={onSearchChange}
        />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    )
  }
}

export default MainPage
