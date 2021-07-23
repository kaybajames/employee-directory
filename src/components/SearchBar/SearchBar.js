import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

class SearchBar extends React.Component {
  state = {
    searchQuery: ""
  };


  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return (
      <div className="search-bar row">
        <FormControl onSubmit={this.onFormSubmit}>
          <TextField
            id="employee-search"
            label="Employee Search"
            variant="outlined"
            value={this.state.searchQuery}
            onChange={(event) => {
              this.setState({searchQuery: event.target.value});
            }}
          />
        </FormControl>
      </div>
    );
  }
}

export default SearchBar;
