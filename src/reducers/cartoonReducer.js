import {
  FETCH_LATEST_CARTOON,
  DEFAULT_STATE,
  FETCH_FIRST_CARTOON,
  FETCH_PREVIOUS_CARTOON,
  FETCH_NEXT_CARTOON,
  FETCH_RANDOM_CARTOON
} from '../types';

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FETCH_LATEST_CARTOON:
      return {
        ...state,
        currentCartoon: action.payload,
        latestCartoon: action.payload
      };
    case FETCH_FIRST_CARTOON:
      return { ...state, currentCartoon: action.payload };
    case FETCH_PREVIOUS_CARTOON: {
      return { ...state, currentCartoon: action.payload };
    }
    case FETCH_NEXT_CARTOON: {
      return { ...state, currentCartoon: action.payload };
    }
    case FETCH_RANDOM_CARTOON: {
        return { ...state, currentCartoon: action.payload };
    }
    default:
      return state;
  }
};
