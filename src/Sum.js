// @flow

import React, { Component } from 'react';
import sum from './utils';

type Props = {
  input: Array<number>
}

class Sum extends Component<Props, void> {
  render() {
    return (
      <span>Sum is {sum(this.props.input)}</span>
    )
  }
}

export default Sum;
