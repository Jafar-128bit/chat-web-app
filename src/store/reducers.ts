import {combineReducers} from 'redux';
import popUpSlice from "./slices/popUpSlices";

const rootReducer = combineReducers({
    popUpSlice,
});

export default rootReducer;