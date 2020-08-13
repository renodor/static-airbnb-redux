import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectFlat } from '../actions';


// eslint-disable-next-line react/prefer-stateless-function
class Flat extends Component {

  handleClick = () => {
    this.props.selectFlat(this.props.flat)
  }

  render() {
    let classes = "flat card-trip";

    if ( this.props.selectedFlat === this.props.flat) {
      classes += " selected"
    }
    return (
      <div className={classes} onClick={this.handleClick}>
        <img src={this.props.flat.imageUrl} />
        <div className="card-trip-infos">
          <div>
            <h2>{this.props.flat.name}</h2>
          </div>
          <h2 className="card-trip-pricing">{this.props.flat.priceCurrency} {this.props.flat.price}</h2>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectFlat: selectFlat },
    dispatch
  );
}

function mapStateToProps(reduxState) {
  return {
    selectedFlat: reduxState.selectedFlat
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Flat);
