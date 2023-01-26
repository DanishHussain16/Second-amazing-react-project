import React, {useState} from 'react'

export default function About(){

    let [myStyle, setStyle]=useState({
        color:'black',
        backgroundColor:'white'
       })

       let [enable, setEnable]=useState("enable dark mode");

       
    const dark= ()=>{

          if (myStyle.color==="black"){
            setStyle(
                {
                    color:'white',
                    backgroundColor:"black"
                }
            )
            setEnable("enable light mode");
          }
          
        else{
            setStyle(
                {
                    color:'black',
                    backgroundColor:'white'
                }
                
            )

            setEnable("enable dark mode")
        }

    }

    return(
        <>
           <div className="container my-3 py-3" style={myStyle}>

            <h3>paragraph</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsa nam, fuga illo quos ipsum voluptatem necessitatibus dignissimos dicta perferendis vel earum accusamus alias doloremque quod, laborum optio, architecto laboriosam.
                <ul>
                    <li>home</li>
                    <li>about us</li>
                    <li>services</li>
                    <li>contact us</li>
                </ul>
              </p>
           </div>
           <div className="container"><button className='btn btn-primary' onClick={dark}>{enable}</button></div>
           
        </>
    )
}