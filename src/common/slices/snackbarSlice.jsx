import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  snackbarConfig: {
    show: false,
    message: '',
  },
};

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    setSnackbarConfig: (state, {payload}) => {
      state.snackbarConfig = payload;
    },
  },
});

export const getSnackbarConfig = (state) =>
  state.snackbar.snackbarConfig;

export const {
  setSnackbarConfig,
} = snackbarSlice.actions;

export default snackbarSlice.reducer;
