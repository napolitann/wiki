import * as React from 'react'

import './AppRoot.scss'

export interface Props {
  children: React.ReactNode
}

export default (props: Props) => <div id="App">{props.children}</div>
