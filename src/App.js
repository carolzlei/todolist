import React , {useRef, useState, useEffect} from 'react';
import './App.css';
import Header from './header'
//import ToDoList from './ToDoList';
import ToDoInput from './ToDoInput'
import tempToDoList from './tempToDoList'
import {initialize, useDatu} from 'datu'
import { ListItemSecondaryAction } from '@material-ui/core'


function App(props){
  const {listItems, addItems} = useDatu([])

  return (
    <div className="app">
      <Header />
      <div className="input">
        <ToDoInput 
          onSend={text=> addItems({text}) }
        />
      </div>
      <div className="list">
        {listItems && listItems.length > 0 
          ? listItems.map((m,i)=> {
            return <tempToDoList key={i} 
              text={m.text} 
            />
          })
        : "Nothing to do right now!"
        }
      </div>
    </div>
  )
}

export default App;


