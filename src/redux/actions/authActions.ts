// Define action types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

// Define action interfaces
import { User } from 'firebase/auth'; // Assuming you import User from firebase/auth

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: User; // Payload is now of type User from Firebase
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

// Action creators
export const loginSuccess = (user: User): LoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const logout = (): LogoutAction => ({
  type: LOGOUT,
});
