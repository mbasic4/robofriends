import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { Card } from './Card'

it('expect to render Card component', () => {
  const robot = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
  }
  expect(shallow(<Card robot={robot} />)).toMatchSnapshot()
})