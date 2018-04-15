import _ from 'lodash';
import {
  LIKE_JOB
} from '../actions/types';

export default function(action, state = []) {
  switch (action.type) {
    case LIKE_JOB:
      return _.uniqBy([
        action.payload,
        ...state
      ], 'jobkey');
    default:
      return state;
  }
}