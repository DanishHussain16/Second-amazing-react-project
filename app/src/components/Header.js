import React, {useState} from 'react'

export default function Header() {

      const [text, setText]= useState("");

    const change= (event)=>{
         setText(event.target.value);
    }

    const toLower=()=>{
          let newText= text.toLowerCase();
          setText(newText)
    }

    const toUpper=()=>{
        let newUpText= text.toUpperCase();
        setText(newUpText)
    }

    const clear = ()=>{
        let clear= "";
        setText(clear);
    }


  return (
    <>

    
    <div className="container">
      <h2>Analyze your text</h2>
      <textarea rows="10" cols="80" placeholder="enter text here" onChange={change} value={text}></textarea><br/>

      <button className='btn btn-primary mx-2' onClick={toUpper}>convert to uppercase</button>
      <button className='btn btn-primary mx-2' onClick={toLower}>convert to lowercase</button>
      <button className='btn btn-danger mx-2' onClick={clear}>clear text</button>
      

    </div>
    <div className="container">
        <p><b>{text.length} </b> characters</p>
        <p><b>{text.split(" ").length} </b> words</p>
        <p>estimated time to read <b>{0.005*text.length}</b> minutes</p>


        <h2>preview</h2>
        <p>{text}</p>

    </div>
    
    
    
    
    
    </>
  )
}

