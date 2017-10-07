import * as React from 'react'

import './index.scss'
import { Props } from './index.props'

export default (props: Props): JSX.Element => {
	const Icon = require(`./icon/${ props.name }.svg`)

	const [width, height] = props.size || ['', '']

	return (
		<span
			id = 'logo'
			style = {{ width, height }}
			dangerouslySetInnerHTML = {{ __html: Icon }}
		/>
	)
}
