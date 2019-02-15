import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import NotFound from '../components/NotFound';
import Loading from '../components/Loading'

function Loader() {
  return <Loading />;
}

const Timeline = Loadable({
  loader: () => import(/* webpackChunkName: "timeline" */ '../containers/Timeline'),
  loading: Loader
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
