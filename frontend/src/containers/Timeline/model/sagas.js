import { GET_ALL_TIMELINE_EVENTS, RECEIVED_ALL_TIMELINE_EVENTS } from './actions';
import { put, takeLatest } from 'redux-saga/effects';

import { callAPI } from '../../../utils/http'

function* fetchNews() {
  const json = yield callAPI();
  yield put({ type: RECEIVED_ALL_TIMELINE_EVENTS, payload: json.all, });
}
export function* watchAllTimelineEvents() {
     yield takeLatest(GET_ALL_TIMELINE_EVENTS, fetchNews)
}