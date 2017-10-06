import { Map } from 'immutable'
import { Action } from 'redux'

import * as types from '../ActionTypes'

const initState = Map({
	name: 'Danuel'
})

export interface Actions extends Action {
	name: string
}

export default (state = initState, action: Actions) => {
	switch (action.type) {
		case types.CHANGE_NAME:
			return state.set('name', action.name)
		default:
			return state
	}
}
