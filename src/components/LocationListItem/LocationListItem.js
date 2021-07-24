import React from 'react';
import { Button } from '@material-ui/core';

class LocationListItem extends React.Component {
  state = {};

  onLocationFilter = (event) => {
    this.props.filterLocation(this.props.currentLocation);
  }

  // add a clear filter button option at the end
  render() {
    return (
      <Button
        variant="outlined"
        color={this.props.currentLocation == "" ? "secondary" : "primary"}
        onClick={this.onLocationFilter}>
        {this.props.currentLocation == "" ? "Clear Location Filter" : this.props.currentLocation}
      </Button>
    )
  }
}

export default LocationListItem;
