import React from 'react';
import Inbox from './inbox';
import Today from './today';
import Week from './week';
import { Route, Switch } from 'react-router-dom';


export default () => (
  <div>
    <Route exact={true} path="/" component={Inbox} />
    <Route exact={true} path="/today" component={Today} />
    <Route exact={true} path="/week" component={Week} />
  </div>
);
