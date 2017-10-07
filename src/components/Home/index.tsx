import * as React from 'react'
import { connect } from 'react-redux'

import './index.scss'
import { Props, storeState, dispatcher } from './index.props'
import { Container } from '../base'

class Home extends React.Component<Props> {
	render (): JSX.Element {
		return (
			<Container id = 'Home'>
				<textarea
					onChange = {this.props.parseSource}
					defaultValue = {this.props.source}
				/>
				<div id = 'markdown'>
					{this.props.source}
				</div>
			</Container>
		)
	}
}

export default connect(storeState, dispatcher)(Home)
