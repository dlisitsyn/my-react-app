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
          <table border="0" cellSpacing="0" cellPadding="0">
            <caption>Billing and Invoices</caption>
            <thead>
              <tr>
                <th scope="col">Invoce</th>
                <th scope="col">Title</th>
                <th scope="col">Issued</th>
                <th scope="col">Status</th>
                <th scope="col">Amount</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <TableRow dueDate={Date('January 11, 2018 00:00:00')}/>
              <TableRow dueDate={Date('January 17, 2018 00:00:00')}/>
              <TableRow dueDate={Date('January 17, 2018 00:00:00')}/>
              <TableRow dueDate={Date('January 17, 2018 00:00:00')}/>
              <TableRow dueDate={Date('January 17, 2018 00:00:00')}/>
              <TableRow dueDate={Date('January 17, 2018 00:00:00')}/>
              <TableRow dueDate={Date('January 17, 2018 00:00:00')}/>
            </tbody>
          </table>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
