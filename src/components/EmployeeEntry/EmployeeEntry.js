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

  render () {
    // for api change to state later: const name= = this.state.name
    let name, role, department, location;

    if (this.props.name) {
      name = <h2 class="align-items-center">{this.props.name}</h2>
    }

    if (this.props.role) {
      role = <p className="col-3">Role: {this.props.role}</p>
    }

    if (this.props.department) {
      department = <p className="col-3">Department: {this.props.department}</p>
    }

    if (this.props.location) {
      location = <p className="col-3">Location: {this.props.location}</p>
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

  // componentDidMount() {
  // insert API call here, on success use setState
  // testAPICall(
  // success => setState blah
  // err => setState error blah
  // )
  // }
  // componentDidUpdate() -- on this.setState, executes, load data onc changing
  // componentWillUnmount() -- calls on component being unshown, good place for cleanup
}

export default EmployeeEntry;
