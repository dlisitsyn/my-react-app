// TODO:
// - use state
// - add colouring to Past due and Due labels
// - add blue border on the left to Due Invoices
// - format headings
// - left align content

import React, { Component } from 'react';
import LinkButton from './LinkButton';
import CheckBox from './CheckBox';
import Kebab from './Kebab';
import { isBefore, isAfter, isSame, diff } from 'compare-dates';

class TableRow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dueText: ''
    };
  }

  today = new Date();

  getStatusClasses(dueDate) {
    if (!dueDate) {
      return '';
    }

    let ddClasses = '';

    if (isAfter(dueDate, this.today, 'day') || isSame(dueDate, this.today, 'day')) {
      ddClasses = 'table--row__dueSoon';
      this.state.set({
        statusText: "Due " + dueDate
      });
    } else if (isBefore(dueDate, this.today, 'day')) {
      ddClasses = 'table--row__pastDue';
      this.state.set({
        statusText: "Past due " + dueDate
      });
    }

    return ddClasses;
  }

  formatDate(date) {
    if (!date) {
      return '';
    }

    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    let day = date.getDate();
    let formattedDate = [];

    formattedDate.push(day < 10 ? '0' + day : day);
    formattedDate.push(months[date.getMonth()]);
    formattedDate.push(date.getYear() + 1900);

    return formattedDate.join(' ');
  }

  processStatus = (status, dueDate) => {
    let statusText = "";
    let statusClasses = "";

    if (isAfter(dueDate, this.today, 'day') || isSame(dueDate, this.today, 'day')) {
      statusClasses = 'table--row__dueSoon';
      statusText = "Due " + this.formatDate(dueDate);
    } else if (isBefore(dueDate, this.today, 'day')) {
      statusClasses = 'table--row__pastDue';
      statusText = "Past due " + this.formatDate(dueDate);
    } else {
      statusClasses = "";
    }

    return {
      statusText: status ? status : statusText,
      statusClasses: status ? "" : statusClasses
    }
  }

  render() {
    const dueDate = this.props.dueDate;
    const status = this.props.status;
    let formattedDueDate = this.formatDate(dueDate);
    const daysPastDue = diff(this.today, dueDate, 'day');
    const statusProps = this.processStatus(status, dueDate);

    return (
      <tr className={"table--row " + statusProps.statusClasses}>
        <td>
          <CheckBox/>
          1003453462
        </td>
        <td>Finance US. New Sale</td>
        <td>{formattedDueDate}</td>
        <td>{statusProps.statusText}</td>
        <td>{daysPastDue} days ago</td>
        <td>
          USD 1,456.65
          <LinkButton text="Pay"/>
          <Kebab/>
        </td>
      </tr>
    );
  }
}

export default TableRow;
