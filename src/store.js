import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import person from './data/person';
import employer from './data/employer';

const defaultState = {
    person, employer
};

const store = createStore(rootReducer, defaultState);

export default store;