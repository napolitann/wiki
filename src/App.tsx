import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import AppRoot from './AppRoot'
import Home from './components/Home'
import Header from './components/base/Header'

export default (): JSX.Element => (
	<Router>
		<AppRoot>
			<Header />
			<Route path = '/' component = {Home} />
		</AppRoot>
	</Router>
)
