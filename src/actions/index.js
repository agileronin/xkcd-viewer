import xkcd from '../apis/xkcd';
import {
  FETCH_LATEST_CARTOON,
  FETCH_FIRST_CARTOON,
  FETCH_PREVIOUS_CARTOON,
  FETCH_NEXT_CARTOON,
  FETCH_RANDOM_CARTOON
} from '../types';

const _getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

export const fetchLatestCartoon = () => async dispatch => {
  const response = await xkcd.get('/');
  dispatch({
    type: FETCH_LATEST_CARTOON,
    payload: response.data
  });
};

export const fetchFirstCartoon = () => async dispatch => {
  const response = await xkcd.get('/1');
  dispatch({
    type: FETCH_FIRST_CARTOON,
    payload: response.data
  });
};

export const fetchPreviousCartoon = () => async (dispatch, getState) => {
  const currentIssue = getState().cartoon.currentCartoon.num;
  if (currentIssue > 1) {
    const response = await xkcd.get(`/${currentIssue - 1}`);
    dispatch({
      type: FETCH_PREVIOUS_CARTOON,
      payload: response.data
    });
  }
};

export const fetchRandomCartoon = () => async (dispatch, getState) => {
  const latestIssue = getState().cartoon.latestCartoon.num;
  const randomIssue = _getRandomInt(latestIssue) + 1;
  const response = await xkcd.get(`/${randomIssue}`);
  dispatch({
    type: FETCH_RANDOM_CARTOON,
    payload: response.data
  });
};

export const fetchNextCartoon = () => async (dispatch, getState) => {
  const latestIssue = getState().cartoon.latestCartoon.num;
  const currentIssue = getState().cartoon.currentCartoon.num;
  if (currentIssue < latestIssue) {
    const response = await xkcd.get(`/${currentIssue + 1}`);
    dispatch({
      type: FETCH_NEXT_CARTOON,
      payload: response.data
    });
  }
};
export const toggleFavorite = () => {};
