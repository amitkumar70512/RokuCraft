export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';

export interface StartLoadingAction {
  type: typeof START_LOADING;
}

export interface StopLoadingAction {
  type: typeof STOP_LOADING;
}

export const startLoading = (): StartLoadingAction => ({
  type: START_LOADING,
});

export const stopLoading = (): StopLoadingAction => ({
  type: STOP_LOADING,
});
