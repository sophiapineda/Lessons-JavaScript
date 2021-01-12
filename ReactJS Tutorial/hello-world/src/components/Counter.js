import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    //this.setState(
    //   {
    //      count: this.state.count + 1
    //},
    //() => {
    //  console.log('Callback vakue', this.state.count)
    //  }
    // }

    this.setState((prevState) => ({
        count: prevState.count + this.props.addValue,
    }));
    console.log(this.state.count);
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render() {
    return (
      <div>
        <div>count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
