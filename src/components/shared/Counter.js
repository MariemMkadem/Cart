/* eslint-disable camelcase */
/* eslint-disable consistent-return */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-string-refs */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Mutation, Query } from 'react-apollo';
import IncrementButton from '../../gql/cache/IncrementButton';
import Count from '../style/CounterStyle';
import Get_Counter from '../../gql/cache/Counter';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      statu: false,
      value: 0,
    };
  }

  updateQuantity(qty) {
    this.setState({
      quantity: qty,
    });
  }

  increment = (e) => {
    e.preventDefault();
    const { qStock } = this.props;
    this.setState(
      { value: this.state.value + 1 },
      async () => {
        await this.updateQuantity(this.state.value);
        // console.log(this.state.value)
        if (this.state.value >= qStock) { this.setState({ statu: true }); }
        // console.log('----------', this.state.statu);
      }
    );
    this.props.handleQuantityChange(this.state.value + 1);
  }
  decrement = (e) => {
    e.preventDefault();
    if (this.state.value <= 1) {
      return this.state.value;
    }
    this.setState(
      { value: this.state.value - 1 });
    this.props.handleQuantityChange(this.state.value - 1);
    e.preventDefault();
  }
  feed = () => {
    this.setState(
      {
        value: this.refs.feedQty.value,
      },
      () => {
        this.updateQuantity(this.state.value);
      }
    );
  }
  resetQuantity() {
    this.setState({
      value: 0,
    });
  }


  render() {

    return (
      <Count>
        <div className="stepper-input">
          <button className="decrement" onClick={this.decrement}>
            –
          </button>
          <Query query={Get_Counter} RefetchPolicy="network-only" >
            {
              ({ loading, error, data }) => {
                if (loading) return (<h4>loading...</h4>);
                if (error) return (`${error}`);
                const count = data.counter;
                console.log('-------',data);
                return (
                  <input
                    ref="feedQty"
                    type="number"
                    className="quantity"
                    value={count.value}
                    onChange={this.feed}
                  />
                );
              }}
          </Query>
          <Mutation mutation={IncrementButton}>
            {
              (incrementCounter) => (
                <button
                  disabled={this.state.statu}
                  className="increment"
                  onClick={() => {
                    incrementCounter({});
                  }}
                >
                  +
                </button>
              )
            }
          </Mutation>
        </div>
      </Count>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number,
};

export default Counter;
