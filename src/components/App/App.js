import '../../assets/css/App.css';
import React from 'react';
import EmployeeEntry from '../EmployeeEntry/EmployeeEntry.js';
import SearchBar from '../SearchBar/SearchBar.js';

class App extends React.Component {
  onSearchSubmit(searchQuery) {
    console.log("search query", searchQuery);
  }

  render() {
    return (
      <div className="App container-fluid">
        <h1 className="text-center">Employee Directory</h1>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <EmployeeEntry
          name="John Nowak"
          role="Technomancer"
          department="Technology"
          location="Rochester, NY" />
        <EmployeeEntry
          name="Kay James"
          role="Senior Technomancer"
          department="Technology"
          location="New York, NY" />
      </div>
    );
  }
}

export default App;
