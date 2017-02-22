import * as personState from '../data/person';
const person = (state=personState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            };
        default:
            return state;
    }
    return state;
};

export default person;