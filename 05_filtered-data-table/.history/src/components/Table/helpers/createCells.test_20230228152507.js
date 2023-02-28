import { shallow } from 'enzyme'
import createCells from './createCells'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Tr from '../Tr'
import Th from '../Th'
import Td from '../Td'

Enzyme.configure({ adapter: new Adapter() })

describe('createCells function', () => {
  it('should render Td components when isHeader is false', () => {
    const row = { id: 1, name: 'John Doe', age: 30 }
    const isHeader = false
    const wrapper = shallow(<Tr>{createCells(row, isHeader)}</Tr>)
    expect(wrapper.find(Td)).toHaveLength(3)
  })

  it('should render Th components when isHeader is true', () => {
    const row = { id: 1, name: 'John Doe', age: 30 }
    const isHeader = true
    const wrapper = shallow(<Tr>{createCells(row, isHeader)}</Tr>)
    expect(wrapper.find(Th)).toHaveLength(3)
  })

  it('should use createKey function to generate key props', () => {
    const row = { id: 1, name: 'John Doe', age: 30 }
    const isHeader = true
    const wrapper = shallow(<Tr>{createCells(row, isHeader)}</Tr>)
    expect(wrapper.find(Th).first().key()).toBe(`${row.id}-id`)
  })
})
