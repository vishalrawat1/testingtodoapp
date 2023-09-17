"use client"
import React, { useEffect, useState } from 'react'
import { globals } from '@/app/globals.css'
const Mid = (props) => {
    const [input , setinput]  = useState('');
    const getvalue =(event)=>{
        console.log(event);
    }
    const funct =(event)=>{
      console.log(event);
    }
  return (
    <>
    <center className='2ndline'>
         <input type='text'
          value={input}


          onChange={(event)=>{
            setinput(event.target.value);
        
         }}></input>


         <button onClick={()=>{
                props.func1(input);
                setinput("");
         }
         }>Click Me</button>
         
    </center>
    </>
  )
}

export default Mid