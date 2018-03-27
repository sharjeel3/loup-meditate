import CONSTANTS from '../global'

const defaultState = {
    loading: false,
    plans: []
}

const plan = (state = defaultState, action) => {
    switch (action.type) {
        case CONSTANTS.REFRESH_PLANS:
            return {
                ...state,
                plans: action.plans,
                loading: action.loading
            }
        default:
            return state
    }
}

export default plan
