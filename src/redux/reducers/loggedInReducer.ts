// loggedInReducer.ts

import { START_LOGGED_IN, STOP_LOGGED_IN, LoggedInActionTypes } from '../../redux/actions/loggedInActions'

export interface LoggedInState {
  isLoggedIn: boolean;
}

const initialState: LoggedInState = {
  isLoggedIn: false,
};

const loggedInReducer = (state = initialState, action: LoggedInActionTypes): LoggedInState => {
  switch (action.type) {
    case START_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case STOP_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default loggedInReducer;
