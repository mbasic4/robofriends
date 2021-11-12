import { shallow } from "enzyme"
import { CardList } from "./CardList"

it('expect to render CardList component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv'
    }
  ]

  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot()
})