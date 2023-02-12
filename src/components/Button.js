import React from 'react'

export default function Button(props) {
  return (
    <>
    <div className='button'>
        <button className='btnInner'>{props.value}</button>
    </div>
    </>
  )
}
