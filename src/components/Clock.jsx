import React, { Component } from 'react';
import '../clock.css'
class Clock extends Component {

  state = {
    date: new Date()
  }

  componentDidMount = () => {

    this.timerId = setInterval(() => {
      this.tick()
    }, 1000);

  }

  componentWillUnmount = () => {

    clearInterval(this.timerID);

  }

  tick = () => {
    console.log(this.timerId);
    this.setState({ date: new Date() })
  }
  render() {
    return (
      <div id="clock">
        <h1> Time is  :-
          "<span id="time"> {this.state.date.toLocaleTimeString()}</span> "
        </h1>
      </div>
    );
  }
}

export default Clock;