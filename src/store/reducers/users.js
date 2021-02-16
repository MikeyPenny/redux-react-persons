import person from '../../components/Person/Person';
import * as actionTypes from '../actions';

const intialState = {
    persons: []
}

const reducer = (state = intialState, action) => {

    switch (action.type.action) {
        case actionTypes.STORE: 
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Mikster',
                age: Math.floor( Math.random() * 40 )
            }
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            }
        case actionTypes.DELETE:
            const updPersons = state.persons.filter((person) => person.id !== action.type.id);
            return {
                ...state,
                persons: updPersons,
            }
        
    }

    return state;
}

export default reducer;