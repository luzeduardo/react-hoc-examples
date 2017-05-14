import React from 'react';
import PropTypes from 'proptypes';
import {compose, setDisplayName, setPropTypes} from 'recompose';
const {connect} = Redux(); //fake local redux

//composing multiple high order components in One
const enhacer = compose(
  setDisplayName('User'),
  setPropTypes({
    name: PropTypes.string.isRequired,
    status: PropTypes.string
  }),
  connect()
);

const ComposeMultipleHOCTogether = enhacer(({name, status, dispatch}) =>
  <div className="User" onClick={
    () => dispatch({type:"USER_CLICKED"})
  }>
    {name} : {status}
  </div>
);
export default ComposeMultipleHOCTogether;
console.log(ComposeMultipleHOCTogether.displayName);

function Redux(){
  return {
    connect: () => BaseComponent => (props) => <BaseComponent {...props}
      dispatch={({type}) => console.log(type + 'dispatched') }
    />
  }
}
