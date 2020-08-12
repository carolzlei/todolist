import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function ToDoInput() {
  const classes = useStyles();
  return <div className="form-group">
    <form className={classes.root} noValidate autoComplete="off">
      <Input defaultValue="What's to do today?" inputProps={{ 'aria-label': 'description' }}/>
    </form>
  </div>
}

export default ToDoInput
