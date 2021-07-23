import '../../assets/css/App.css';
import React from 'react';
import EmployeeEntry from '../EmployeeEntry/EmployeeEntry.js';
import AddEmployee from '../AddEmployee/AddEmployee.js';

class App extends React.Component {
  state = {
    employees: [
      {
        name: "Kay James",
        role: "Senior Technomancer",
        department: "Technology",
        location: "New York, NY"
      },
      {
        name: "John Nowak",
        role: "Junior Technomancer",
        department: "Technology",
        location: "Rochester, NY"
      },
      {
        name: "Road Runner",
        role: "QA Tester",
        department: "Technology",
        location: "Looney Tunes, CA"
      },
      {
        name: "Wile E. Coyote",
        role: "Product Manager",
        department: "Technology",
        location: "Looney Tunes, CA"
      },
      {
        name: "Joel Grind",
        role: "Staff Artist",
        department: "Media",
        location: "Portland, OR"
      },
      {
        name: "Daffy Duck",
        role: "Director of Communications",
        department: "Marketing",
        location: "Looney Tunes, CA"
      }
    ]
  }

  // employee list created in localStorage to demonstrate employee modification
  componentDidMount() {
    const employeeJSON = localStorage.getItem("employees");
    const employeeListFromBrowser = JSON.parse(employeeJSON);
    console.log(employeeListFromBrowser);
    if (employeeListFromBrowser) {
      this.setState({employees: employeeListFromBrowser});
    }
  }

  // likewise, demonstrating adding employees
  componentDidUpdate(prevProps, prevState) {
    const employeeJSON = JSON.stringify(this.state.employees);
    localStorage.setItem("employees", employeeJSON)
  }

  addNewEmployee = (newEmployee) => {
    let employeeList = this.state.employees;
    employeeList.push(newEmployee);
    this.setState({employees: employeeList});
  };

  render() {
    return (
      <div className="App container-fluid">
        <h1 className="text-center">Employee Directory</h1>
        <AddEmployee onSubmit={this.addNewEmployee} />

        {this.state.employees && this.state.employees.map(employee =>
          <EmployeeEntry
            name={employee.name}
            role={employee.role}
            department={employee.department}
            location={employee.location} />
        )}
      </div>
    );
  }
}

export default App;
