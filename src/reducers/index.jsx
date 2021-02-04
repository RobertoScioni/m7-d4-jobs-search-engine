export default function (state = {}, action) {
	switch (action.type) {
		case "ADD_JOB_TO_FAVS":
			return {
				...state,
				favs: {
					...state.favs,
					jobs: state.favs.jobs.concat(action.payload),
				},
			}
		case "REMOVE_JOB_FROM_FAVS":
			return {
				...state,
				favs: {
					...state.favs,
					jobs: [...state.favs.jobs.filter((id) => id !== action.payload)],
				},
			}

		case "SELECT_JOB_TO_VIEW":
			return {
				...state,
				selected: {
					...state.selected,
					job: action.payload,
				},
			}
		default:
			return state
	}
}
