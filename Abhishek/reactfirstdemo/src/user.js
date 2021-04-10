import React, { Component } from 'react';
class User extends Component {
    state = {}
    render() {
        return (<div className="container">
            <br />
            <ul className="list-group">
                <li className="list-group-item"><label className="align-left">No:</label>  {this.props.No} </li>
                <li className="list-group-item"><label className="align-left">Name:</label>{this.props.Name}</li>
                <li className="list-group-item" > <label>Department:</label>{this.props.Department}</li >
            </ul >
        </div >);
    }
}

export default User;