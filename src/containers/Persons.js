import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

class Persons extends Component {
    state = {
        persons: []
    }

    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.concat(newPerson)}
        } );
    }

    personDeletedHandler = (personId) => {
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.filter(person => person.id !== personId)}
        } );
    }

    render () {
        return (
					<div>
						<AddPerson
							personAdded={this.props.onStorePerson}
						/>
						{this.props.persons.map((person) => (
							<Person
								key={person.id}
								name={person.name}
								age={person.age}
								clicked={() =>
									this.props.onDeletePerson(person.id)}
							/>
						))}
					</div>
				);
    }
}

const mapStateToProps = (state) => {
    return {
        persons: state.pers.persons, 
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
			onStorePerson: (name, age) =>
				dispatch({ type: actionTypes.STORE, payload: {name: name, age: age}}),
            onDeletePerson: (id) => dispatch({type: actionTypes.DELETE, id: id}),
		};
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);