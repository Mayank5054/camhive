import React from 'react'
import Compartment01 from './Compartment01'
import Form01 from './Form01'
import Form02 from './Form02'
import Form03 from './Form03'

export default function () {

  return (
    <>
    <div className='form_main_container'>
    <div className='form_main_container_inner' id='form_main_container'>
        <Compartment01 />
        <Form01 />
        <Form02 />
        <Form03 />
    </div>
    </div>
    </>
    
  )
}
