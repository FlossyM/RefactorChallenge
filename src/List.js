import React, { Component } from "react"
import TodoListItem from './ListItem'
import PropTypes from 'prop-types';

class TodoList extends React.Component {
    render() {
      const {items,removeItem,markTodoDone} =this.props
      var lists = items.map((item, index) => {
        return (
          <TodoListItem
            key={index}
            item={item}
            index={index}
            removeItem={removeItem}
            markTodoDone={markTodoDone}
          />
        );
      });
      return <ul className="list-group"> {lists} </ul>;
    }
  }
  

  export default TodoList;

  TodoList.propTypes = {
    removeItem:PropTypes.func,
    markTodoDone:PropTypes.func,
    items:PropTypes.array 
  };