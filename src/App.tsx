import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.scss'

import Home from './components/Home'

export default (): JSX.Element => (
	<Router>
		<Route path = '/' component = {Home} />
	</Router>
)
