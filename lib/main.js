import React, {Component} from 'react'
import {render} from 'react-dom'

const App = () => (
	<div>
		hello, react!
	</div>
)

render(
	<App />
	, document.getElementById('app')
)
