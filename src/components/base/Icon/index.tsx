import * as React from 'react'
import './index.scss'

export interface Props {
	name: string
}

export default (props: Props): JSX.Element => {
	const resource = require(`./icon/${ props.name }.svg`)

	return (
		<span dangerouslySetInnerHTML = {{__html: resource}}/>
	)
}
