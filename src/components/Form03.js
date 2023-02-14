import React from 'react'
import Button from "./Button"
import profileImage from "../images/tesla.png"

export default function Form03() {

    const translateBack = () => {
        console.log("hello")
        const container = document.getElementById("form_main_container_inner")
        container.style.transform = "translateX(-100vw)"
    }
    return (
        <>
            <div className="Form01_main_container">
                <div className="blank"></div>  
                {/* <Compartment01 />  */}
                <div className="Form01_page_Inner">
                    <div className="Form01_page_title">
                        <h2 className="head">Upload More Photos</h2>
                    </div>
                    <form>
                        <div className="Form_page_content">
                            <div className=" multipleImgDiv">
                                <div className='profileImage'>
                                    <img src={profileImage}></img>
                                </div>
                                <div className='multiplePhotoUpload'>
                                <input type="file" id="images" accept="image/*" required />
                                <div className='multiplePhotoDisplay'>
                                 <div className='BlankPhotoDiv'></div>
                                 <div className='BlankPhotoDiv'></div>
                                 <div className='BlankPhotoDiv'></div>
                                 <div className='BlankPhotoDiv'></div>
                                 <div className='BlankPhotoDiv'></div>
                                 <div className='BlankPhotoDiv'></div>
                                    
                                </div>
                                </div>
                            </div>
                            <div className="formSubmit">
                                <Button value="Proceed"></Button>
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
