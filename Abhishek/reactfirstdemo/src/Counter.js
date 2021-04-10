import React, { Component } from "react";
class Counter extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = { count: 0 };

    // This binding is necessary to make `this` work in the callback
    this.AddClickEvent = this.AddClickEvent.bind(this);
    this.RemoveClickEvent = this.RemoveClickEvent.bind(this);
  }
  AddClickEvent(e) {
    e.preventDefault();
    this.setState({ count: this.state.count + 1 });
  }
  RemoveClickEvent(e) {
    if (this.state.count !== 0) this.setState({ count: this.state.count - 1 });
  }
  render() {
    let count = this.state.count === 0 ? "" : this.state.count;
    return (
      <div>
        <button
          type="button"
          className="btn btn-sm btn-primary mr-2"
          onClick={this.AddClickEvent}
        >
          Add
        </button>
        <label>{count}</label>
        <button
          type="button"
          className="btn btn-sm btn-danger ml-2"
          onClick={this.RemoveClickEvent}
        >
          Remove
        </button>
        <br />
      </div>
    );
  }
}

export default Counter;
