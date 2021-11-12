import MainPage from './MainPage';
import { shallow } from 'enzyme';

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps} />)
})

it('renders MainPage without crashing', () => {
  expect(wrapper).toMatchSnapshot()
})

it('filters robots correctly', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net'
    }],
    searchField: 'clem',
    isPending: false
  }
  const wrapper2 = shallow(<MainPage {...mockProps2} />)
  expect(wrapper2.instance().filterRobots()).toEqual([{
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net'
  }])
})

it('filters robots correctly 2', () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net'
    }],
    searchField: 'dal',
    isPending: false
  }
  const wrapper3 = shallow(<MainPage {...mockProps3} />)
  expect(wrapper3.instance().filterRobots()).toEqual([])
})