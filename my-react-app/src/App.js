import React, { Component } from 'react';
// import logo from './logo.svg';

import Button from './components/Button';
// import LinkButton from './components/LinkButton';
import TableRow from './components/TableRow';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <Button />
          <br/>
          <br/>
        </p>
        <form action="#" method="POST">
          <fieldset>
          <table border="0" cellspacing="0" cellpadding="0">
            <caption>Billing and Invoices</caption>
            <thead>
              <th scope="col">Invoce</th>
              <th scope="col">Title</th>
              <th scope="col">Issued</th>
              <th scope="col">Status</th>
              <th scope="col">Amount</th>
              <th scope="col"></th>
            </thead>
            <tbody>
              <TableRow dueDate="today"/>
              <TableRow dueDate=""/>
            </tbody>
          </table>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
