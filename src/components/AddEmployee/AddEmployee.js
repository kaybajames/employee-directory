import React from 'react';
import { FormControl, TextField, Button } from '@material-ui/core';

class AddEmployee extends React.Component {
  state = {
    name: "",
    role: "",
    department: "",
    location: ""
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: "",
      role: "",
      department: "",
      location: ""
    })
  }

  render() {
    return (
      <div className="add-employee row">
        <h3>Add Employee:</h3>
        <FormControl onSubmit={this.onFormSubmit}>
          <TextField
            id="employee-name"
            label="Name"
            variant="outlined"
            value={this.state.name}
            onChange={(event) => {
              this.setState({name: event.target.value});
            }}
          />
          <TextField
            id="employee-role"
            label="Role"
            variant="outlined"
            value={this.state.role}
            onChange={(event) => {
              this.setState({role: event.target.value});
            }}
          />
          <TextField
            id="employee-department"
            label="Department"
            variant="outlined"
            value={this.state.department}
            onChange={(event) => {
              this.setState({department: event.target.value});
            }}
          />
          <TextField
            id="employee-location"
            label="Location"
            variant="outlined"
            value={this.state.location}
            onChange={(event) => {
              this.setState({location: event.target.value});
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={this.onFormSubmit}>
              Add Employee
            </Button>
        </FormControl>
      </div>
    );
  }
}

export default AddEmployee;
