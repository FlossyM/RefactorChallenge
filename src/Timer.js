import React, { Component } from "react";

class Timer extends Component {
    state = {count: 0}
    timer = null;
  
    updateTimer = () => {
      this.setState({
        count: this.state.count += 1
      });
    }
  
    componentDidMount = () => {
      let temp = this;
      temp.timer = setInterval(temp.updateTimer, 1000);
    }
  
    render(){
      return (
        <div>
          <h2>Seconds so Far:</h2>
          <p>{this.state.count}</p>
        </div>
      );
    }
  }
  

  export default Timer;