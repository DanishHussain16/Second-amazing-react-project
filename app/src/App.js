import './App.css';
import Header from './components/Header.js';
import About from './components/About.js';
import React, {useState} from 'react';



 function App() {
  let [theme,setTheme]=useState({
    color:'black',
    backgroundColor:'white'
  })


  const toggle=()=>{
    if(theme.color==="black"){
        setTheme(
          {
            color:'white',
            backgroundColor:'black'
          }

        )
    }
    else{
     setTheme( {
        color:'black',
        backgroundColor:'white'
      })
    }
  }

 
  return (
    <div>
       <Header mode={toggle} myStyle={theme}/>
       <About myStyle={theme}/>
    </div>
  )
}

export default App;
