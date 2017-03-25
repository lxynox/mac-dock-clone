import React from 'react'
import {shallow, mount} from 'enzyme'
import Navbar from './Navbar'

let sidebar
beforeEach(() => {
	sidebar = shallow(<Navbar />)
})

it('renders by default/customized props', () => {
	expect(sidebar.find('li')).toHaveLength(5)
	expect(sidebar.find('ul').prop('style').flexDirection).toBe('row')
	sidebar = shallow(
		<Navbar
			pos='left'>
			<span>custom</span>
			<span>props</span>
		</Navbar>
	)
	expect(sidebar.find('li')).toHaveLength(2)
	expect(sidebar.find('ul').prop('style').flexDirection).toBe('column')
})

it('toggles zooming when mouse over/out', () => {
	sidebar = mount(<Navbar />)
	const lis = sidebar.find('li')
	lis.at(0).simulate('mouseover')
	expect(lis.at(0).getDOMNode().style.zoom).toBe('2')
	expect(lis.at(1).getDOMNode().style.zoom).toBe('1.5')
	expect(lis.at(2).getDOMNode().style.zoom).toBe('1.2')
	expect(lis.at(3).getDOMNode().style.zoom).toBe('')
	lis.at(0).simulate('mouseout')
	expect(lis.at(0).getDOMNode().style.zoom).toBe('1')
	expect(lis.at(1).getDOMNode().style.zoom).toBe('1')
	expect(lis.at(2).getDOMNode().style.zoom).toBe('1')
})

it('changes the active item when user clicked', () => {
	sidebar = mount(<Navbar />)
	const li2 = sidebar.find('li').at(2)
		, li0 = sidebar.find('li').at(0)
	expect(li0.prop('style').border).toBeDefined()
	expect(li2.prop('style').border).not.toBeDefined()
	li2.simulate('click')
	expect(li0.prop('style').border).not.toBeDefined()
	expect(li2.prop('style').border).toBeDefined()
})
