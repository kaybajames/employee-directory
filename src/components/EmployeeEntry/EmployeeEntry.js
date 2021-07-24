import React from 'react';
import { Button } from '@material-ui/core';

class EmployeeEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteItem = (event) => {
    this.props.deleteItem(this.props.id);
  }

  render () {
    // for api change to state later: const name= = this.state.name
    let name, role, department, location;

    if (this.props.name) {
      name = <h2>{this.props.name}</h2>
    }

    if (this.props.role) {
      role = <p className="col-12 col-md-4">Role: {this.props.role}</p>
    }

    if (this.props.department) {
      department = <p className="col-12 col-md-4">Department: {this.props.department}</p>
    }

    if (this.props.location) {
      location = <p className="col-12 col-md-4">Location: {this.props.location}</p>
    }

    return (
      <div className="employee-entry row justify-content-start" style={this.props.visible ? {display:"flex"} : {display:"none"}}>
        {name}
        {role}
        {department}
        {location}
        <Button
          variant="contained"
          color="secondary"
          onClick={this.deleteItem}>
            Delete Employee
        </Button>
      </div>
    );
  }
}

export default EmployeeEntry;
