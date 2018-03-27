import {CONSTANTS} from '../global'

const defaultState = {
    loading: false,
    plans: [],
    json: {}
}

const plan = (state = defaultState, action) => {
    switch (action.type) {
        case CONSTANTS.REFRESH_PLANS:
            return {
                ...state,
                plans: action.plans,
                loading: action.loading,
                json: action.json
            }
        default:
            return state
    }
}

export default plan
