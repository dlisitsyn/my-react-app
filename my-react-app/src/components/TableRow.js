import React, { Component } from 'react';
import LinkButton from './LinkButton';
import CheckBox from './CheckBox';
import Kebab from './Kebab';
import Tooltip from './Tooltip';
import helpIcon from '../img/help-icon.png';
import { isSame, diff } from 'compare-dates';

class TableRow extends Component {

  parseDueDate(dueDate) {
    let ddClasses = '';
    const today = new Date();

    if (diff(dueDate, today, 'day') === 0 && isSame(dueDate, today, 'day')) {
      ddClasses = 'table--row__dueToday';
    } else if (diff(today, dueDate, 'day') >= 1) {
      ddClasses = 'table--row__pastDue';
    }

    return ddClasses;
  }

  render() {
    const dueDate = this.props.dueDate;
    const dueDateClasses = this.parseDueDate(dueDate);

    return (
      <tr className={"table--row " + dueDateClasses}>
        <td>
          <Tooltip text="We could be tooltips just for one day." image={helpIcon}></Tooltip>
          <CheckBox/>
          1003453462
        </td>
        <td>Finance US. New Sale</td>
        <td>{dueDate.getDate()}/{dueDate.getMonth() + 1}/{dueDate.getYear() + 1900}</td>
        <td>Past Due <Tooltip text="Some long annoying meaningless silly message." image={helpIcon}></Tooltip></td>
        <td>5 days ago</td>
        <td>
          USD 1,456.65
          <LinkButton text="Pay"/>
          <Kebab/>
          <Tooltip text="I'm really close to being far right." image={helpIcon}></Tooltip>
        </td>
      </tr>
    );
  }
}

export default TableRow;
