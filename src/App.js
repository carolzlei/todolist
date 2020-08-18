import React , {useState, useEffect} from 'react';
import './App.css';
import Header from './header'
//import ToDoList from './ToDoList';
import ToDoInput from './ToDoInput'
import TempToDoList from './tempToDoList'
//import { ListItemSecondaryAction } from '@material-ui/core'

function App(props){
  const [snooze, setSnooze] = useState(false) //toggle for when user wants to turn off the main "todo" view
  const [listItems, setItems] = useState([])
  //const [todo, setToDo] = useState("")

  useEffect(()=>{ //I am trying to use localStorage right now to hold my list of todo items
    const storedList = localStorage.getItem('listItems') // not sure it is working
    if(storedList) { 
      setItems(storedList) 
      props.saveList(storedList) 
    }
  }, [])

  return <div className="app">

      {!snooze && <>
        <Header onCLick={() => {
          snooze = setSnooze(!snooze);
        }}
          />
        <div className="input">
          <ToDoInput 
            onSend={text=> listItems.concat({text}) }
          />
        </div>
        <div className="list">
          {listItems && listItems.length > 0 
            ? listItems.map((m,i)=> {
              return <TempToDoList 
                key={i} 
                text={m.text} 
              />
            })
          : 
            <div className="no-todo">
              <p>Nothing to do right now!</p>
              <img src="https://www.trendingus.com/wp-content/uploads/2016/06/peaceful-life-of-a-girl.jpg" alt="peaceful waters" width="960" height="384" />
            </div>
          }
        </div>
      </>}
      
      {snooze && <>
        <div>
          <Header onClick={() => {
            snooze = setSnooze(!snooze);
          }}
          />
          <div className="no-todo">
            take a deep breathe!
          </div>
        </div>
      </>}
          
    </div>
}

export default App;


