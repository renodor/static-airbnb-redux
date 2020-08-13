import React, { Component } from 'react';

import FlatList from '../containers/flat_list';
import Map from '../containers/map';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="row">
        <FlatList />
        <Map />
      </div>
    );
  }
}

export default App;
