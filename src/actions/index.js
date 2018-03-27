import { CONSTANTS, ENDPOINTS } from '../global'
import axios from 'axios'

const refreshPlans = (response) => ({
    type: CONSTANTS.REFRESH_PLANS,
    loading: true,
    plans: [1],
    json: response
})


const fetchActivities = () => (dispatch) => {
    const URL = ENDPOINTS.activities
    const args = {
        method: 'GET',
        url: URL,
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return axios(args)
        .then(json => {
            return dispatch(refreshPlans(json.data))
        })
        .catch((err)=>{})
}

export default fetchActivities
