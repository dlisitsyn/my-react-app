import React, { Component } from 'react';
import LinkButton from './LinkButton';
import CheckBox from './CheckBox';
import Kebab from './Kebab';

class TableRow extends Component {

  render() {

    const due = this.props.dueDate;

    const extraClasses =
      due && due === 'today' ?
      'table--row__dueToday' : 'table--row__pastDue';

    return (
      <tr className={"table--row " + extraClasses}>
        <td><CheckBox/>1003453462</td>
        <td>Finance US. New Sale</td>
        <td>03 Jul 2017</td>
        <td>Past Due</td>
        <td>5 days ago</td>
        <td>USD 1,456.65 <LinkButton text="Pay"/><Kebab/></td>
      </tr>
    );
  }
}

export default TableRow;
