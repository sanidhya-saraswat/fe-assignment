import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect} from 'react';
import {setSnackbarConfig} from '../slices/snackbarSlice';
import {SNACKBAR_DEFAULT_TIMEOUT} from '../../constants';
import classNames from 'classnames';

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

  return <div className={snackbarConfig.show ? classNames('snackbar', 'show') : 'snackbar'}>
    {snackbarConfig.message}
  </div>;
};

export default Snackbar;
