import React from 'react'

const Element = (props) => {
  return (
    <>
    <center>
    <li>
        <ul>{props.value}  <button onClick={()=>{
            props.delfunct(props.index)
            console.log("Deleting")
        }}>click Me</button></ul>
        
    </li>
    </center>
        
    </>
  )
}

export default Element