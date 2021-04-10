import React from "react";

class TableDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }
  componentDidMount() {
    this.fetchAPI().then((data) => {
      this.setState({ todos: data });
    });
  }

  async fetchAPI() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = response.json();
    return data;
  }

  render() {
    const todoItemList = this.state.todos.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.userId}</td>
          <td>{item.title}</td>
          <td>{item.completed === true ? "Yes" : "No"}</td>
        </tr>
      );
    });
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User Id</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>{todoItemList}</tbody>
      </table>
    );
  }
}

export default TableDemo;
