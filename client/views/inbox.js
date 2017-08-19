import React from 'react';
import { connect } from 'react-redux';
import { UnitsList } from '../components/index';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  paper: {
    marginBottom: '40px',
    padding: '16px'
  }
};

class Inbox extends React.Component {

  constructor(props) {
    super(props);

    this.openCreateDialog = this.openCreateDialog.bind(this);
  }

  openCreateDialog(event) {
    console.log(event);
    alert('dialog');
  }

  render() {
    return (
      <div>
        <Paper style={styles.paper}>
          <FlatButton label="Create" onClick={this.openCreateDialog}/>
        </Paper>
        <div></div>
        <div>
          <UnitsList units={this.props.units} />
        </div>
      </div>
    );
  }

}

function mapPropsToState(state) {
  return {
    units: state.units.components
  };
}

Inbox = connect(mapPropsToState)(Inbox);
export default Inbox;
