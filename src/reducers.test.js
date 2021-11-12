import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants"
import * as reducers from './reducers'

describe('searchRobots', () => {
  it('should return initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' })
  })

  it('should handle CHANGE_SEARCHFIELD', () => {
    expect(reducers.searchRobots({ searchField: '' }, {
      type: CHANGE_SEARCHFIELD,
      payload: 'abc'
    })).toEqual({ searchField: 'abc' })
  })
})

describe('requestRobots', () => {
  const initialStateRobots = {
    error: '',
    robots: [],
    isPending: false
  }

  it('should return initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
  })

  it('should handle REQUEST_ROBOTS_PENDING action', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_PENDING
    })).toEqual({ ...initialStateRobots, isPending: true })
  })

  it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: [{
        id: '123',
        name: 'test',
        email: 'test@gmail.com'
      }]
    })).toEqual({ ...initialStateRobots, robots: [{
      id: '123',
      name: 'test',
      email: 'test@gmail.com'
    }] })
  })

  it('should handle REQUEST_ROBOTS_FAILED action', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_FAILED,
      payload: 'Nooooo!'
    })).toEqual({ ...initialStateRobots, error: 'Nooooo!' })
  })
})