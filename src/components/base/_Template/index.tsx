import * as React from 'react'
import { connect } from 'react-redux'

import { Props, State, storeState, dispatcher } from './indexTypes'
import './index.scss'

class Index extends React.Component<Props, State> {
	render (): JSX.Element {
		return (
			<div />
		)
	}
}

export default connect(storeState, dispatcher)(Index)
