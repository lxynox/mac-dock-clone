import React, {Component} from 'react'
import {render} from 'react-dom'

import Navbar from './navbar'

const items = ['🤧', '🤠', '😲', '🤣', '🐽']

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
			pos='right'
			zooms={[1.6, 1.2, 1.1]}
			/>
	</section>
)

render(
	<App />
	, document.getElementById('app')
)
