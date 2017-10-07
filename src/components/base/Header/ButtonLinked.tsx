import * as React from 'react'

import { Props } from './ButtonLinked.props'
import Icon from '../Icon'

export default ({ icon, text }: Props): JSX.Element => (
	<div id = 'ButtonLinked'>
		<Icon name = {icon} />
		<span id = 'text'>{text}</span>
	</div>
)
