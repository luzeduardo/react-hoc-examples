import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const overridePropsHoc = (overrideProps) => (BaseComponent) =>
(props) => <BaseComponent {...props} {...overrideProps} />

const User = ({name}) => <div className="User"><h2>{name}</h2></div>
const User2 = overridePropsHoc({ name:'Luz'})(User)

const App = () =>
<div>
  <User name="Tim" />
  <User2 name="John"/>
</div>

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
