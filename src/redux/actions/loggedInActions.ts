
// for saving bot Logged in status of a user through out state, modify below code accordingly

export const START_LOGGED_IN = 'START_LOGGED_IN';
export const STOP_LOGGED_IN = 'STOP_LOGGED_IN';

export interface StartLoggedInAction {
  type: typeof START_LOGGED_IN;
}

export interface StopLoggedInAction {
  type: typeof STOP_LOGGED_IN;
}

export const startLoggedIn = (): StartLoggedInAction => ({
  type: START_LOGGED_IN,
});

export const stopLoggedIn = (): StopLoggedInAction => ({
  type: STOP_LOGGED_IN,
});

export type LoggedInActionTypes = StartLoggedInAction | StopLoggedInAction;
