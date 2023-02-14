import React from 'react'
import Button from "./Button"

export default function Form02() {

    const translateX=(e)=>{
        e.preventDefault()
        console.log("hello")
        const container = document.getElementById("form_main_container_inner")
        container.style.transform="translateX(-200vw)"
        // container.style.zIndex = -1; 
    
    }

    const translateBack = () => {
        console.log("hello")
        const container = document.getElementById("form_main_container_inner")
        container.style.transform = "translateX(0vw)"
    }
    return (
        <>
            <div className="Form01_main_container">
                <div className="blank"></div>
                {/* <Compartment01 />  */}
                <div className="Form01_page_Inner">
                    <div className="Form01_page_title">
                        <h2 className="head">Upload Profile Photo</h2>
                    </div>
                    <form>
                        <div className="Form_page_content">
                            <div className="profilePhotoInput">
                                <label for="images" class="drop-container">
                                    <span class="drop-title">Drop file here</span>
                                    or
                                    <input type="file" id="images" accept="image/*" required />
                                </label>
                            </div>

                            <div className="formSubmit">
                                <Button value="Proceed" funcCall={translateX} />
                            </div>
                        </div>
                    </form>
                    <div className="goBackDiv">
                        <button onClick={translateBack}>Go Back</button>
                    </div>
                </div>
            </div>
        </>
    )
}
