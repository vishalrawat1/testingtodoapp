"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Top from "@/app/Components/Top"
import Mid from "@/app/Components/Mid"
import Bottom from "@/app/Components/Bottom"
import Element from './Components/Element'

const page = () => {
  const [todoinput, settodoinput] = useState([])
  const func1=(inputtext)=>{
     settodoinput([...todoinput , inputtext]);
  }
  const delfunct = (key)=>{
    let newlist = todoinput;
    newlist.splice(key , 1);
    settodoinput([...newlist])
  }
  return (
    <>
      <Top/>
      <Mid func1 ={func1}/>
      {todoinput.map((value , i)=>{
        return(
          <Element key ={i} index = {i} value={value} delfunct= {delfunct}/>
        )
      })}
      <Bottom/>
    </>
  )
}

export default page