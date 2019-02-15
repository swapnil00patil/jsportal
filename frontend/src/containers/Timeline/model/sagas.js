import { GET_ALL_TIMELINE_EVENTS, RECEIVED_ALL_TIMELINE_EVENTS } from './actions';
import { put, takeLatest } from 'redux-saga/effects';

import { callAPI } from '../../../utils/http'

function* fetchNews() {
  const json = yield callAPI('/events');
  yield put({ type: RECEIVED_ALL_TIMELINE_EVENTS, payload: json, });
}
export function* watchAllTimelineEvents() {
     yield takeLatest(GET_ALL_TIMELINE_EVENTS, fetchNews)
}