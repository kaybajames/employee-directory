import '../../assets/css/App.css';
import React from 'react';
import EmployeeEntry from '../EmployeeEntry/EmployeeEntry.js';
import AddEmployee from '../AddEmployee/AddEmployee.js';
import LocationListItem from '../LocationListItem/LocationListItem.js';

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
    ],
    employeeLocations: [],
    locationFilter: ""
  }

  componentDidMount() {
    // employee list created in localStorage to demonstrate employee modification
    const employeeJSON = localStorage.getItem("employees");
    const employeeListFromBrowser = JSON.parse(employeeJSON);
    if (employeeListFromBrowser) {
      this.setState({employees: employeeListFromBrowser});
    }

    let employeeList = this.state.employees;
    let LocationListItem = this.state.employeeLocations;

    // breaking out locations to create lication filter elements
    employeeList.forEach(function(employee) {
      if (!LocationListItem.includes(employee.location)) {
        LocationListItem.push(employee.location);
      }
    })

    this.setState({employeeLocations: LocationListItem});
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

  deleteEmployee = (employeeToDelete) => {
    let employeeList = this.state.employees;
    employeeList.splice(employeeToDelete, 1);
    this.setState({employees: employeeList});
  }

  filterLocation = (locationToFilter) => {
    this.setState({locationFilter: locationToFilter});
  }

  // I'd ideally finish my lil CRUD app I ended up with but for time constraints

  render() {
    return (
      <div className="App container-fluid">
        <h1 className="text-center">Employee Directory</h1>
        <AddEmployee onSubmit={this.addNewEmployee} />

        {this.state.employeeLocations && this.state.employeeLocations.map(location =>
          <LocationListItem
            currentLocation={location}
            filterLocation={this.filterLocation} />
        )}

        <LocationListItem
          currentLocation={""}
          filterLocation = {this.filterLocation} />

        {this.state.employees && this.state.employees.map(employee =>
          <EmployeeEntry
            name={employee.name}
            role={employee.role}
            department={employee.department}
            location={employee.location}
            id={employee.id}
            deleteItem={this.deleteEmployee}
            visible={employee.location.includes(this.state.locationFilter)} />
        )}
      </div>
    );
  }
}

export default App;
