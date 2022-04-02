/* eslint-disable prettier/prettier */
import {
  FETCH_SUCCESS,
  FETCH_FAILURE,
  FETCHING,
} from '../utils/constants';

const initialState = {
  news: [],
  isFetching: false,
  error: false,
};

export default function newsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        news: action.data,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
}
