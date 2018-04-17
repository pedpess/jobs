import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';

import {
  FETCH_JOBS,
  LIKE_JOB,
} from './types';

const JOB_BASE_URL = 'http://api.indeed.com/ads/apisearch?';
const JOB_QUERY_PARAMS = {
  publisher: '7762438560239737',
  format: 'json',
  v: '2',
  latlong: 1,
  radius: 10,
  q: 'javascript'
};

const buildJobsUrl = zip => {
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
  return `${JOB_BASE_URL}${query}`;
};

export const fetchJobs = (region, callback) => async (dispatch) => {
  try {
    let zip = await reverseGeocode(region);
    const url = buildJobsUrl(zip);
    let { data } = await axios.get(url);
    dispatch({
      type: FETCH_JOBS,
      payload: data
    });
    callback();
  } catch (e) {
    throw Error(e);
  }
};

export const likeJob = (job) => {
  return {
    type: LIKE_JOB,
    payload: job,
  };
}
