/* eslint-disable prettier/prettier */
import { FETCH_SUCCESS, FETCH_FAILURE, FETCHING, API_KEY } from '../../utils/constants';

export function fetchNews() {
  console.log('fetchNews');
    console.log('dispatchfetchNews');
    return fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + API_KEY)
      .then(res => res.json())
      .then(json => {
        return getNewsSuccess(json.articles);
      })
      .catch(err => getNewsFailure(err));


}

function getNewsSuccess(data) {
  console.log('getNewsSuccess');

  return {
    type: FETCH_SUCCESS,
    data,
  };
}

function getNewsFailure() {
  console.log('getNewsFailure');

  return {
    type: FETCH_FAILURE,
  };
}
