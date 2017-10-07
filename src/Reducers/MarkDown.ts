import { Map } from 'immutable'
import { Action } from 'redux'

import * as types from '../ActionTypes'
import { MarkDown } from './utils'

const source = 'source'

const initState = Map({
	[source]: MarkDown.example
})

export interface Actions extends Action {
	source: string
}

export default (state = initState, action: Actions) => {
	switch (action.type) {
		case types.MARK_DOWN_PARSE:
			return state.set(source, MarkDown.render(action.source))
		default:
			return state
	}
}
