import React from 'react';
import './App.css';
import Header from './header';
import ToDoList from './ToDoList';
import ToDoInput from './ToDoInput';


function App(){
  return <div className="app">
      <Header />
      <ToDoInput />
      <ToDoList />
    </div>
}

export default App;
