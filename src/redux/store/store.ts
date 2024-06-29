import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer, { AuthState } from '../reducers/authReducer';
import loadingReducer, { LoadingState } from '../reducers/loadingReducer';
import botReducer, { BotState } from '../reducers/botReducer';

// Define root state interface
export interface RootState {
  auth: AuthState;
  loading: LoadingState;
  bot: BotState;
  // Add other slices as needed
}

// Combine reducers
const rootReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  bot: botReducer,
  // Add other reducers here
});

// Create store
const store = configureStore({
  reducer: rootReducer,
  // Optionally add middleware, devtools, etc.
});

export default store;
