import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ""
    };
  }

  render() {
    return (
      <div className="search-bar row">
        <FormControl>
          <TextField
            id="employee-search"
            label="Employee Search"
            variant="outlined"
            defaultValue={this.state.searchQuery}
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
