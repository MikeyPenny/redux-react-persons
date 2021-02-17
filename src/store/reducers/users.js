
import * as actionTypes from '../actions';

const intialState = {
    persons: []
}

const reducer = (state = intialState, action) => {
    
    switch (action.type) {
			case actionTypes.STORE:
				const newPerson = {
					id: Math.random(), // not really unique but good enough here!
					name: action.payload.name,
					age: action.payload.age,
				};
				return {
					...state,
					persons: state.persons.concat(newPerson),
				};
			case actionTypes.DELETE:
				const updPersons = state.persons.filter(
					(person) => person.id !== action.id
				);
				return {
					...state,
					persons: updPersons,
				};
		}

    return state;
}

export default reducer;