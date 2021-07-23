import '../../assets/css/App.css';
import EmployeeEntry from '../EmployeeEntry/EmployeeEntry.js';

function App() {
  return (
    <div className="App container-fluid">
      <h1 className="text-center">Employee Directory</h1>
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

export default App;