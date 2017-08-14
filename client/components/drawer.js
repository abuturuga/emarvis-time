import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionToday from 'material-ui/svg-icons/action/today';
import ActionViewWeek from 'material-ui/svg-icons/action/view-week';
import { NavLink } from 'react-router-dom';


class DrawerMenu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {open: true};
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleClose() {
    console.log('handle close');
    this.setState({open: false});
  }

  render() {
    console.log(this.state);
    return(
      <div>
        <Drawer open={this.state.open} onRequestChange={(open) => this.setState({open})}>
          <Divider />
          <NavLink to="/inbox">
            <MenuItem leftIcon={<ContentInbox />}>Inbox</MenuItem>
          </NavLink>
          <NavLink to="/today">
            <MenuItem leftIcon={<ActionToday />}>Today</MenuItem>
          </NavLink>
          <NavLink to="/week">
            <MenuItem leftIcon={<ActionViewWeek />}>Week</MenuItem>
          </NavLink>
          <Divider />
        </Drawer>
      </div>
    );
  }

}

export default DrawerMenu;
