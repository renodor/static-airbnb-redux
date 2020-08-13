import React, { Component } from 'react';


// eslint-disable-next-line react/prefer-stateless-function
class Flat extends Component {
  render() {
    return (
      <div>
        <div className="flat card-trip">
          <img src={this.props.flat.imageUrl} />
          <div className="card-trip-infos">
            <div>
              <h2>{this.props.flat.name}</h2>
            </div>
            <h2 className="card-trip-pricing">{this.props.flat.priceCurrency} {this.props.flat.price}</h2>
          </div>
        </div>

      </div>
    );
  }
}

export default Flat;
