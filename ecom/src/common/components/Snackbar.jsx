import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {setSnackbarConfig} from '../slices/snackbarSlice';
import {SNACKBAR_DEFAULT_TIMEOUT} from '../../constants';

const Snackbar = () => {
  const dispatch = useDispatch();
  const snackbarConfig = useSelector((state) => state.snackbar.snackbarConfig);
  let timeout;

  useEffect(() => {
    if (timeout) {
      clearTimeout(timeout);
    }
    if (snackbarConfig.show) {
      timeout = setTimeout(() => {
        dispatch(setSnackbarConfig({show: false}));
      }, snackbarConfig.timeout || SNACKBAR_DEFAULT_TIMEOUT);
    }
  }, [
    snackbarConfig,
  ]);

  return <div className={snackbarConfig.show ? ['snackbar', 'show'].join(' ') : 'snackbar'}>
    {snackbarConfig.message}
  </div>;
};

export default Snackbar;
