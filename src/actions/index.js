import CONSTANTS from '../global'

const refreshPlans = (response) => ({
    type: CONSTANTS.REFRESH_PLANS,
    loading: true,
    plans: [1]
})

export default refreshPlans
