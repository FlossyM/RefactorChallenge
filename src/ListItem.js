import React, { Component } from "react";
import PropTypes from 'prop-types';

class TodoListItem extends Component {
    constructor(props) {
      super(props);

      this.onClickClose = this.onClickClose.bind(this);
      this.onClickDone = this.onClickDone.bind(this);
      
    }
    onClickClose=() =>{
      var index = parseInt(this.props.index);
      this.props.removeItem(index);
    }
    onClickDone=() =>{
      var index = parseInt(this.props.index);
      this.props.markTodoDone(index);
    }

 
    render() {
     const{index,value,date,done} =this.props.item
      var todoClass = done ? "todoItem done" : "todoItem undone";
      return (
        <li className="list-group-item ">
          <div className={todoClass}>
            <span
              className="glyphicon glyphicon-ok icon"
              aria-hidden="true"
              onClick={this.onClickDone}
            />
            <span>{value}</span>
            <span className='date'>{`Added: ${date}`}</span>
            <button type="button" className="close" onClick={this.onClickClose}>
              &times;
            </button>
          </div>
        </li>
      );
    }
  }

  export default TodoListItem;

  TodoListItem.propTypes = {
    item: PropTypes.array
  };