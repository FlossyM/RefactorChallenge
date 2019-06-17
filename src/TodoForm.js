import React, { Component } from "react";
import PropTypes from 'prop-types';

class TodoForm extends React.Component {
    constructor(props) {
      super(props);
      this.onSubmit = this.onSubmit.bind(this);
      this.onChange = this.handleChange.bind(this);
    }

    state={todoText:""}
    
    onSubmit(event) {
      event.preventDefault();
      this.props.addItem(this.state.todoText);
      this.setState({todoText: ""});
  
    }

    handleChange=(e)=>{
    console.log(e.target.value);
    this.setState({todoText: e.target.value});
    }

    render() {
      return (
        <form ref="form" id="todoForm" onSubmit={this.onSubmit} className="form-inline">
          <input
            type="text"
            id="itemName"
            onChange={this.handleChange}
            className="form-control"
            placeholder="add a new todo..."
            autoFocus="true"
            value ={this.state.todoText}
          />
          <button type="submit" className="btn btn-default">
            Add
          </button>
        </form>
      );
    }
  }

  export default TodoForm;

  TodoForm.propTypes = {
    addItem:PropTypes.func
  };