import * as React from 'react'

import './index.scss'

export interface Props {
	children?: React.ReactNode
	className?: React.CSSProperties
	id?: string
}

const Container = 'Container'

export default (props: Props): JSX.Element => {
	const { id, className } = props
	const cx = (className)
		? `${ Container } ${ className }`
		: Container

	return (
		<div id = {id} className = {cx}>
			{props.children}
		</div>
	)
}
