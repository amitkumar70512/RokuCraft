import { Reducer } from 'redux';
import { START_LOADING, STOP_LOADING, StartLoadingAction, StopLoadingAction } from '../actions/loadingActions';

export interface LoadingState {
  isLoading: boolean;
}

const initialState: LoadingState = {
  isLoading: false,
};

const loadingReducer: Reducer<LoadingState, StartLoadingAction | StopLoadingAction> = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        isLoading: true,
      };
    case STOP_LOADING:
      return {
        isLoading: false,
      };
    default:
      return state;
  }
};

export default loadingReducer;
