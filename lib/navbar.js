import React, {Component, PropTypes} from 'react'

const styles = {
	ul: {
		display: 'flex',
		backgroundColor: 'rgba(142, 139, 140, 0.8)',
		boxShadow: '0 0 6px rgba(142, 139, 140, 0.8)',
		li: {
			listStyle: 'none',
			width: 65,
			height: 65,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			fontSize: '2em',
		}
	}
}

export default class Navbar extends Component {
	constructor(props) {
		super(props)

		function initPos({ pos }) {
			console.debug(pos)
			if (/left|right/.test(pos)) {
				Object.assign(styles.ul, {
					width: 80,
					padding: '50px 0',
					flexDirection: 'column',
					alignItems: pos === 'left' ? 'flex-start' : 'flex-end',
					borderRadius: pos === 'left' ? '0 8px 8px 0' : '8px 0 0 8px',
					float: pos === 'left' ? 'none' : 'right'
				})
			} else {
				Object.assign(styles.ul, {
					height: 80,
					padding: '0 50px',
					flexDirection: 'row',
					alignItems: pos === 'bottom' ? 'flex-end' : 'flex-start',
					borderRadius: pos === 'bottom' ? '8px 8px 0 0' :  '0 0 8px 8px'
				})
			}
		}
		initPos(props)

		this.state = {
			activeItem: 0	// index of current active item
		}
	}

	handleClick(idx = 0) {
		return function () {
			this.setState({
				activeItem: idx
			})
		}
	}

	handleMouseOver (zooms = []) {
		// TODO: think about ways to work around to make the zoom effect smoother
		// >tried debounce, throttle with `react synthetic` event, seemingly not well http://blog.revathskumar.com/2016/02/reactjs-using-debounce-in-react-components.html
		let [z1, z2, z3] = zooms

		return function (e) {
			// zoom in
			const cur = e.target.tagName.toLowerCase() === 'li'
					? e.target
					: e.target.parentNode
				, pre = cur.previousSibling
				, next = cur.nextSibling
			cur.style.zoom = z1
			cur.firstChild.style.cursor = 'pointer'
			if (pre) {
				pre.style.zoom = z2
				const pre2 = pre.previousSibling
				if (pre2) {
					pre2.style.zoom = z3
				}
			}
			if (next) {
				next.style.zoom = z2
				const next2 = next.nextSibling
				if (next2) {
					next2.style.zoom = z3
				}
			}
		}
	}

	handleMouseOut (e) {
		// zoom out
		const cur = e.target
			, pre = cur.previousSibling
			, next = cur.nextSibling
		cur.style.zoom = 1
		cur.style.cursor = 'auto'
		if (pre) {
			pre.style.zoom = 1
			const pre2 = pre.previousSibling
			if (pre2) {
				pre2.style.zoom = 1
			}
		}
		if (next) {
			next.style.zoom = 1
			const next2 = next.nextSibling
			if (next2) {
				next2.style.zoom = 1
			}
		}
	}

	render() {
		const {items, zooms, style} = this.props

		return (
			<ul style={{...styles.ul, ...style}}>
				{items.map((item, x) =>
					<li
						style={this.state.activeItem !== x
								? styles.ul.li
								: {...styles.ul.li,
									...style.active
								}}
						key={'__item__'+x}
						onClick={this.handleClick(x).bind(this)}
						onMouseOver={this.handleMouseOver(zooms)}
						onMouseOut={this.handleMouseOut}
						>
						<div className='wrapper'>
							{item}
						</div>
					</li>)
				}
			</ul>
		)
	}
}

Navbar.propTypes = {
	items: PropTypes.array.isRequired,
	pos: PropTypes.string,
	zooms: PropTypes.array,
	style: PropTypes.object
}

Navbar.defaultProps = {
	items: ['🤣', '🙃', '😞', '🙁', '🤔'],
	pos: 'bottom',
	zooms: [2, 1.5, 1.2],
	style: { active: {border: '5px outset rgba(142, 139, 140, 0.8)'} }
}
