import React,{useState} from 'react'



export default function Button(props) {
  return (
    <>
    <div className='button'>
      {
        props.funcCall ? 
        <button className='btnInner' onClick={props.funcCall}>{props.value}</button>:
        <button className='btnInner'>{props.value}</button>
      }
    </div>
    </>
  )
}
