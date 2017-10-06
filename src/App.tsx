import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import AppRoot from './AppRoot'
import Home from './components/Home'

export default (): JSX.Element => (
	<Router>
		<AppRoot>
			<Route path = '/' component = {Home} />
		</AppRoot>
	</Router>
)
