import React from 'react';
import TodoList from "./components/TodoList";
import "./App.css";
import TodoForm from "./components/TodoForm";

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Feeding the baby',
    id: 1528817084358,
    completed: false
  },

  {
    task: 'Finish Project',
    id: 1528817084359,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 
 constructor() {
   super();
   this.state = {
      todoData // same as === todoData: todoData
   };
 }
//  Class methods to update state
 toggleItem = itemId => {
   console.log(itemId);

  // // In the todoList array, find the item that was clicked
    // (looking for the item with itemId)
    // Toggle the completed field on that item
    // Return all other items untouched

    this.setState({
      // Build a new state object each time
      todoData: this.state.todoData.map(item => {
        if (itemId === item.id) {
          return {
            // return the item with 'completed' field toggled
            ...item, 
            completed: !item.completed
            
          };
        }
        return item;
        
      })
    })
 }
    //  Class method to add a grocery item
    addItem = item => {
      const newItem = {
        task: item,
        id: Date.now(),
        completed: false
      };
      this.setState({
        todoData: [...this.state.todoData, newItem]
      });
    }

    clearItem = e => {
      e.preventDefault();
      this.setState({
        todoData: this.state.todoData.filter(item => !item.completed)
      });
    };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1> Todo App!</h1>
          <TodoForm addItem={this.addItem}/>
        </div>
        <TodoList 
        todoData={this.state.todoData} 
        toggleItem={this.toggleItem}
        clearItem={this.clearItem}
        />

        
      </div>
    );
  }
}

export default App;

