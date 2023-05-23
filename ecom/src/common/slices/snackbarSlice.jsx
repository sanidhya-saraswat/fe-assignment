import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  snackbarConfig: {
    show: false,
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

export const {
  setSnackbarConfig,
} = snackbarSlice.actions;

export default snackbarSlice.reducer;
