import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function ToDoInput(props) {
  const classes = useStyles();
  const [text,setText] = useState('')

  return <div className="form-group">
    <form className={classes.root} noValidate autoComplete="off">
      <Input 
        defaultValue="What's to do today?"
        inputProps={{ 'aria-label': 'description' }}
        fullWidth = {true}
        //placeholder="Type your todo here!"
        value={text}
        onChange={
          e=> setText(e.target.value)
        }
        onKeyPress={e=> {
          if(e.key ==='Enter' && text) {
            props.onSend(text)
            setText('')
          }
        }}
      />
    </form>
  </div>
}

export default ToDoInput
