import React, {Component} from 'react'
import {render} from 'react-dom'

import Navbar from './navbar'

const items = ['🤧', '🤠', '😲', '🤣', '🐽'].map(e => <span> {e} </span>)

const styles = {
	app: {
		width: '80%',
		background: 'url(./lib/bg.jpg) no-repeat'
	}
}

const App = () => (
	<section style={styles.app}>
		<h1>hello, react!</h1>
		<Navbar
			pos='left'
			zooms={[1.6, 1.2, 1.1]}
			>
			{items}
		</Navbar>
	</section>
)

render(
	<App />
	, document.getElementById('app')
)
