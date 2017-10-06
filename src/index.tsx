import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import reducers from './Reducers'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
	<Provider store = {createStore(reducers)}>
		<App />
	</Provider>,
	document.getElementById('Root')
)

registerServiceWorker()
