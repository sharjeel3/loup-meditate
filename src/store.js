import { createStore, applyMiddleware } from 'redux'
import combinedReducer from './reducers'
import { createLogger } from 'redux-logger'

const middleware = []

// TODO: change this to correct app environment
const APP_ENV = 'development'
if (APP_ENV !== 'production') {
    middleware.push(createLogger())
}

let store = createStore(
    combinedReducer,
    applyMiddleware(...middleware)
)

export default store
