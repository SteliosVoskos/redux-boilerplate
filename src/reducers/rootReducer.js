import { combineReducers } from 'redux';

import person from './person';
import employer from './employer';

const rootReducer = combineReducers({
    person,
    employer
});

export default rootReducer;