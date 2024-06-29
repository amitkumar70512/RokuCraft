import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer, { AuthState } from '../reducers/authReducer';
import loadingReducer, { LoadingState } from '../reducers/loadingReducer';

// Define root state interface
export interface RootState {
  auth: AuthState;
  loading: LoadingState;
  // Add other slices as needed
}

// Combine reducers
const rootReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  // Add other reducers here
});

// Create store
const store = configureStore({
  reducer: rootReducer,
  // Optionally add middleware, devtools, etc.
});

export default store;
