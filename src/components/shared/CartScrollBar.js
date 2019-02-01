/* eslint-disable react/no-string-refs */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

class CartScrollBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Scrollbars style={{ width: 360, height: 320 }} ref="scrollbars">{this.props.children}
      </Scrollbars>
    );
  }
}

export default CartScrollBar;
