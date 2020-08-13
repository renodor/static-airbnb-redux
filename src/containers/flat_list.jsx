import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { setFlats } from '../actions';

import Flat from '../components/flat';


// eslint-disable-next-line react/prefer-stateless-function
class FlatList extends Component {
  // componentWillMount() {
  //   this.props.setFlats();
  // }

  render() {
    return (
      <div className="flat-list col-sm-7">
        hello
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     { setFlats: setFlats },
//     dispatch
//   );
// }

// function mapStateToProps(reduxState) {
//   return {
//     flats: reduxState.flats
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(FlatList);
export default FlatList;
