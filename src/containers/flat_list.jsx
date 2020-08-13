import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setFlats } from '../actions';

import Flat from '../containers/flat';


// eslint-disable-next-line react/prefer-stateless-function
class FlatList extends Component {
  componentWillMount() {
    this.props.setFlats();
  }

  render() {
    return (
      <div className="flat-list col-sm-7">
        { this.props.flats.map(flat => <Flat flat={flat} key={flat.name} />)}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats: setFlats },
    dispatch
  );
}

function mapStateToProps(reduxState) {
  return {
    flats: reduxState.flats
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FlatList);
