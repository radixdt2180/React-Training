import React from "react";
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  //     static getDerivedStateFromProps(props,state)
  //    {
  //        console.log(state)
  //        return null;
  //    }
  render() {
    return (
      <div>
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }

  componentDidMount() {
    this.timerID = setInterval(
      () =>
        this.setState({
          date: new Date(),
        }),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
}
export default Clock;
