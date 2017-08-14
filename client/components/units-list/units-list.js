import React from 'react';
import { List, ListItem } from 'material-ui/List';
import { pinkA200, transparent } from 'material-ui/styles/colors';
import Checkbox from 'material-ui/Checkbox';
import { Card } from 'material-ui/Card';


class UnitLists extends React.Component {

  constructor(props) {
    super(props);
  }

  renderUnits() {
    return this.props.units.map(unit => {
      return (
        <ListItem
          leftCheckbox={<Checkbox />}
          key={unit.id}
          primaryText={unit.title} />
      );
    });
  }

  render() {
    return (
      <Card>

        <List>
          {this.renderUnits()}
        </List>
      </Card>
    );
  }

}

export default UnitLists;
