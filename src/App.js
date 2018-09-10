import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'jfndsb', name: "Dima", age: 25 },
      { id: 'wiojin', name: "Yura", age: 20 },
      { id: '1l6smk', name: "Kolya", age: 30 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Dima', age: 25 },
        { name: event.target.value, age: 20 },
        { name: "Kolya", age: 30 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); // 1 вариант
    const persons = [...this.state.persons]; // 2 вариант

    persons.splice(personIndex, 1);

    this.setState({
      persons: persons
    });
  }
  
  render() {
    const styleBtn = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={ () => this.deletePersonHandler(index) }
              name={person.name} 
              age={person.age} 
              key={person.id}
            />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <button 
          style={styleBtn}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
