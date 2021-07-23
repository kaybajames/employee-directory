import React from 'react';

class EmployeeEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null, // title, first, last properties
      role: null, // not auto generated
      department: null, // not auto generated
      location: null, // street, city, state, postcode properties, timezone.description and timezone.offset
      email: null,
      phone: null,
      picture: null, //picture.large, medium, thumbnail
      errorMessage: null
    };
  }

  // renderContent() {
  // add error conditionals in here and not in main render
  // }

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
      <div className="employee-entry row justify-content-start">
        {name}
        {role}
        {department}
        {location}
      </div>
    );
  }
}

export default EmployeeEntry;
