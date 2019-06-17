import React, { Component } from "react";
import "./App.css";
import Timer from './Timer'
import TodoList from './List'
import TodoForm from './TodoForm'
import moment from "moment";



class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);     
    this.markTodoDone = this.markTodoDone.bind(this);
    this.handleClick = this.handleClick.bind(this);
   
  }
 state = { todoItems: [], showTimer: false }


  addItem=(todoItem)=>{
 
    let todoItems = this.state.todoItems;
    todoItems.unshift({
      index: todoItems.length + 1,
      value: todoItem,
      date: moment().format("ll"),
      done: false
    });
    this.setState({ todoItems: todoItems });
    
  }

  removeItem=(itemIndex) =>{
    let todoItems = this.state.todoItems;
    todoItems.splice(itemIndex, 1);
    this.setState({ todoItems: todoItems });
  }

  markTodoDone=(itemIndex)=>{
    let todoItems = this.state.todoItems;
    let todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({ todoItems: todoItems });
  }

  handleClick=()=> {
    this.setState(prevState => ({ showTimer: !prevState.showTimer }))
  }

  render() {
  
    return (
      <div id="main">
      <h1>Todo list</h1>
        <button
          onClick={this.handleClick}
        >
          Toggle Timer
        </button>
        {this.state.showTimer && <Timer />}
        <TodoList
          items={this.state.todoItems}
          removeItem={this.removeItem}
          markTodoDone={this.markTodoDone}
        />
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default TodoApp;

