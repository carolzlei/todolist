import React from 'react';

function TempToDoList(props){
    console.log(props)
    return <div className="list-group">  
        {props.text}
    </div>
}

export default TempToDoList
