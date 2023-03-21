import React from 'react'
import classes from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={classes.spinner}>
      <div className={classes.loader}>Loading...</div>
    </div>
  );
}

export default Spinner