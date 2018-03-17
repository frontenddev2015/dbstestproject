import React from 'react';
import EmployeeDetails from './EmployeeDetails.jsx';

export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Employee Details</h1>
        <EmployeeDetails />
      </div>);
  }
}