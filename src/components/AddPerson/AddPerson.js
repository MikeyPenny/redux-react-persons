import React, { Component } from 'react';
import './AddPerson.css';

class AddPerson extends Component {

    state = {
        name: "",
        age: "",
    }

    nameChangeHandler = (ev) => {
        this.setState({name: ev.target.value});
    }

    ageChangedHandler = (ev) => {
        this.setState({age: ev.target.value});
    }

    render() {
        return(
            <div className="AddPerson">
                <input 
                    type="text" 
                    value={this.state.name} 
                    placeholder="Name" 
                    onChange={this.nameChangeHandler} />
                <input 
                    type="number" 
                    value={this.state.age}
                    placeholder="Age"
                    onChange={this.ageChangedHandler} />
                <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div>
        );
    }

}

export default AddPerson;