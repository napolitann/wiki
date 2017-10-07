import * as React from 'react'

import './index.scss'
import Container from '../Container'
import Left from './Left'
import Right from './Right'

export default class Index extends React.Component {
	render (): JSX.Element {
		return (
			<header>
				<Container>
					<Left />
					<Right />
				</Container>
			</header>
		)
	}
}
