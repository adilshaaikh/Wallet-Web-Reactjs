import { combineReducers} from 'redux'
import errorReducers from './errorReducers'
import walletReducers from './walletReducers'

export default combineReducers({
    error:errorReducers,
    wallet:walletReducers
    
})