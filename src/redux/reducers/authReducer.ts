import { Reducer } from 'redux';
import {  User } from 'firebase/auth';
import { LOGIN_SUCCESS, LOGOUT, LoginSuccessAction, LogoutAction } from '../actions/authActions';

export interface AuthState extends User {}

// Define initial state structure matching Firebase User object or null
const initialState: User | null = null;

const authReducer: Reducer<User | null, LoginSuccessAction | LogoutAction> = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      // Assuming action.payload is a User object from Firebase
      return action.payload as User;
    case LOGOUT:
      return null; // Clear the user state when logging out
    default:
      return state;
  }
};

export default authReducer;
