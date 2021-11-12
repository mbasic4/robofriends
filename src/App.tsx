import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AnyAction } from 'redux'

import MainPage, { MainPageProps } from './components/MainPage'
import { requestRobots, setSearchField } from './actions'
import { ThunkDispatch } from 'redux-thunk'

export interface IRobot {
  id: number
  name: string
  email: string
}

interface IState {
  searchRobots: {
    searchField: string
  }
  requestRobots: {
    robots: Array<IRobot>
    isPending: boolean
    error: string
  }
}

const mapStateToProps = (state: IState) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IState, {}, AnyAction>) => {
  return {
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => dispatch(setSearchField(e.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component<MainPageProps> {
  render() {
    return ( 
      <MainPage { ...this.props } />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
