import * as types from '../ActionTypes'

export function CHANGE_NAME (name?: string) {
	return {
		type: types.CHANGE_NAME,
		name
	}
}
