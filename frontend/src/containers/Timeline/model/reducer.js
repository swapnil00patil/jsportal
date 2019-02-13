import initialState from '../../../store/initialState';
import { GET_ALL_TIMELINE_EVENTS, RECEIVED_ALL_TIMELINE_EVENTS } from './actions';

export default function (state = initialState.timeline, action) {
  switch (action.type) {
    case GET_ALL_TIMELINE_EVENTS:
      return {
          ...state,
          all: { ...Object.assign(state.all, { loading: true}) }
      };
    case RECEIVED_ALL_TIMELINE_EVENTS:
      return {
        ...state,
        all: { ...Object.assign(state.all, { data: action.payload, loading: false}) }
      };
    default:
      return state;
  }
}
