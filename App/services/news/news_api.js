/* eslint-disable prettier/prettier */
import { FETCH_SUCCESS, FETCH_FAILURE, API_KEY } from '../../utils/constants';
import { getCurrentLanguage } from '../../config/language';

export function fetchNews() {
  return fetch('https://newsapi.org/v2/top-headlines?language=' + getCurrentLanguage() + '&apiKey=' + API_KEY)
    .then(res => res.json())
    .then(json => {
      return getNewsSuccess(json.articles);
    })
    .catch(err => getNewsFailure(err));


}

function getNewsSuccess(data) {
  return {
    type: FETCH_SUCCESS,
    data,
  };
}

function getNewsFailure() {
  return {
    type: FETCH_FAILURE,
  };
}
