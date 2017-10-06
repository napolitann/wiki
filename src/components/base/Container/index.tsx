import * as React from 'react'

import './index.scss'

export interface Props {
	children?: React.ReactNode
	className?: React.CSSProperties
	id?: string
}

export default (props: Props): JSX.Element => {
	return (
		<div id = {props.id} style = {props.className}>
			{props.children}
		</div>
	)
}
