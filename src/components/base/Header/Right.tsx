import * as React from 'react'

import Icon from '../Icon'

export default (): JSX.Element => (
	<div id = 'Right'>
		<div id = 'Search'>
			<input />
			<Icon size = {['3rem', '3rem']} name = 'search' />
		</div>
	</div>
)
