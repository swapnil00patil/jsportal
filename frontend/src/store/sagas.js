import { fork, all } from 'redux-saga/effects';
import { watchAllTimelineEvents } from '../containers/Timeline/model/sagas';

export default function* root() {
  yield all([
    fork(watchAllTimelineEvents)
  ]);
}
