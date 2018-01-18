import React, { Component } from 'react';
import LinkButton from './LinkButton';
import CheckBox from './CheckBox';
import Kebab from './Kebab';
import Tooltip from './Tooltip';

class TableRow extends Component {

  parseDueDate(dueDate) {
    let ddClasses = '';
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    //dueDate.setHours(0, 0, 0, 0);

    console.log("today " + today);
    console.log("due " + dueDate);

    if (dueDate === today) {
      ddClasses = 'table--row__dueToday';
    }
    //'table--row__pastDue';

    return ddClasses;
  }

  render() {
    const dueDate = this.props.dueDate;
    const dueDateClasses = this.parseDueDate(dueDate);

    return (
      <tr className={"table--row " + dueDateClasses}>
        <td><CheckBox/>1003453462</td>
        <td>Finance US. New Sale</td>
        <td>03 Jul 2017</td>
        <td>Past Due <Tooltip text="Some really confusing message." ></Tooltip></td>
        <td>5 days ago</td>
        <td>USD 1,456.65 <LinkButton text="Pay"/><Kebab/></td>
      </tr>
    );
  }
}

export default TableRow;
