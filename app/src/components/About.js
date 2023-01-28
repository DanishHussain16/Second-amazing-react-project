import React, {useState} from 'react'
import propTypes from 'prop-types';

export default function About(props){
 return(
        <>
           <div className="container my-3 py-3" style={props.myStyle}>

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
          
           
        </>
    )
}