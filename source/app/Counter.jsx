import React from 'react';
import { connect } from 'react-redux'
import * as CounterActions from '../actions/CounterActions.jsx';
/**
 * A counter button: tap the button to increase the count.
 */
class Counter extends React.Component {
  render() {
    return (
      <button
        onClick={() => {
          this.props.dispatch(CounterActions.incCounter());
        }}
      >
        Count: {this.props.counter.value}
      </button>
    );
  }
}

Counter = connect((state)=>{
  return {
    counter: state.counter
  }
})(Counter);

export default Counter;
