import React, { Component } from 'react';
import LinkButton from './LinkButton';
import CheckBox from './CheckBox';
import Kebab from './Kebab';
import Tooltip from './Tooltip';
import helpIcon from '../img/help-icon.png';

class TableRow extends Component {

  parseDueDate(dueDate) {
    let ddClasses = '';
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (dueDate === today) {
      ddClasses = 'table--row__dueToday';
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
        <td>03 Jul 2017</td>
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
