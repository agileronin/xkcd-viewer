import { combineReducers } from 'redux';
import cartoonReducer from './cartoonReducer';

export default combineReducers({
    cartoon: cartoonReducer
});