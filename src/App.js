import React, { Component } from 'react'
import { connect } from 'react-redux'

import { CardList } from './CardList'
import Scroll from './components/Scroll'
import { SearchBox } from './components/SearchBox'
import ErrorBoundary from './components/ErrorBoundary'
import { requestRobots, setSearchField } from './actions'
import Header from './components/Header'

const mapStateToProps = state => {
  console.log(state)
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  componentDidMount () {
    this.props.onRequestRobots()
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props
    const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
