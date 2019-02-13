import { combineReducers } from 'redux';
import timelineReducer from '../containers/Timeline/model/reducer';

export default combineReducers({
  timeline: timelineReducer
});
