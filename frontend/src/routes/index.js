import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import NotFound from '../components/NotFound';

function Loading() {
  return 'loading';
}

const Timeline = Loadable({
  loader: () => import(/* webpackChunkName: "timeline" */ '../containers/Timeline'),
  loading: Loading
});

const routes = () => {
  return [
    <Switch key="switchkey">
      <Route exact path="/" component={Timeline} />
      {/* 404 */}
      <Route component={NotFound} />
    </Switch>
  ];
};

export default routes;
