import { combineReducers } from 'redux';
import auth from '../reducers/auth_reducer';
import jobs from '../reducers/jobs_reducer';

export default combineReducers({
    auth,
    jobs
});