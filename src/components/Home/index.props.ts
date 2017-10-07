import * as types from '../../ActionTypes'

export interface Props {
	source: string,
	parseSource: (evt: React.SyntheticEvent<{}>) => void
}

export const storeState = (state: any) => ({
	source: state.MarkDown.get('source')
})

export const dispatcher = (dispatch: any) => ({
	parseSource (evt: React.SyntheticEvent<{}>): void {
		const { value: source } = evt.target as HTMLTextAreaElement

		return dispatch({
			type: types.MARK_DOWN_PARSE,
			source
		})
	}
})
