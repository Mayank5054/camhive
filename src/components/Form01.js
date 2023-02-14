import React from 'react'
import Button from "./Button"
import Compartment01 from './Compartment01'

export default function Form01() {

    const translateX=(e)=>{
        e.preventDefault()
        const container = document.getElementById("form_main_container_inner")
        container.style.transform="translateX(-100vw)"
        // container.style.zIndex = -1; 
    
    }
    

    return (
        <>
            <div className="Form01_main_container">
                <div className="blank"></div>  
                {/* <Compartment01 />  */}
                <div className="Form01_page_Inner">
                    <div className="Form01_page_title">
                        <h2 className="head">Personal Details</h2>
                    </div>
                    <form>
                        <div className="Form_page_content">
                            <div className="Form_input">
                            <label>Name</label>
                                <input type="text" className='formInput' placeholder="Firstname"></input>
                                <input type="text" className='formInput' placeholder="Lastname"></input>
                            </div>
                            <div className="Form_input">
                                <label>Date of Birth</label>
                                <input type="date" className='formInput'></input>
                            </div>
                            <div className="Form_input formGenderDiv">
                                <label>Gender</label>
                                <button className='formInput'>Male</button>
                                <button className='formInput'>Female</button>
                            </div>
                            <div className="Form_input">
                                <label>Institute</label>
                                <select className='formInput' placeholder='Choose your college'>
                                    <option>Choose your college</option>
                                </select>
                            </div>
                            <div className="formSubmit">
                                <Button value="Proceed" funcCall={translateX}></Button>
                            </div>
                        </div>
                    </form>
                    <div className="goBackDiv">
                        <button>Go Back</button>
                    </div>
                </div>
            </div>
        </>
    )
}
