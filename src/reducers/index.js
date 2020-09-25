import photoReducer from "./photo";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    photos: photoReducer
})
export default rootReducer;