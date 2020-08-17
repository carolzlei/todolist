import React , {useRef, useState, useEffect} from 'react';
import './App.css';
import Header from './header';
//import ToDoList from './ToDoList';
import ToDoInput from './ToDoInput';
import tempToDoList from './tempToDoList';
import {initialize, useDatu} from 'datu'
import { ListItemSecondaryAction } from '@material-ui/core';


function App(props){
  const {listitems, additems} = useDatu()
  return (
    <div className="app">
      <Header />
      <div className="input">
        <ToDoInput 
          onSend={text=> additems({ text }) }
        />
      </div>
      <div className="list">
        {listitems.map((m,i)=> {
          return <tempToDoList key={i} 
            text={m.text} 
            />
        })}
      </div>
    </div>
  )
}

export default App;


