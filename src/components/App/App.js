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
        location: "New York, NY",
        id: 0
      },
      {
        name: "John Nowak",
        role: "Junior Technomancer",
        department: "Technology",
        location: "Rochester, NY",
        id: 1
      },
      {
        name: "Road Runner",
        role: "QA Tester",
        department: "Technology",
        location: "Looney Tunes, CA",
        id: 2
      },
      {
        name: "Wile E. Coyote",
        role: "Product Manager",
        department: "Technology",
        location: "Looney Tunes, CA",
        id: 3
      },
      {
        name: "Joel Grind",
        role: "Staff Artist",
        department: "Media",
        location: "Portland, OR",
        id: 4
      },
      {
        name: "Daffy Duck",
        role: "Director of Communications",
        department: "Marketing",
        location: "Looney Tunes, CA",
        id: 5
      }
    ]
  }

  // employee list created in localStorage to demonstrate employee modification
  componentDidMount() {
    const employeeJSON = localStorage.getItem("employees");
    const employeeListFromBrowser = JSON.parse(employeeJSON);
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
    newEmployee.id = this.state.employees.length;
    let employeeList = this.state.employees;
    employeeList.push(newEmployee);
    this.setState({employees: employeeList});
  };

  deleteEmployee(employeeToDelete) {
    console.log(employeeToDelete);
  }

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
            location={employee.location}
            id={employee.id}
            deleteItem={this.deleteEmployee} />
        )}
      </div>
    );
  }
}

export default App;
