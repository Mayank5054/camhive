import React from 'react'
import img from "../images/tesla.png";
function Compartment01(){
  return (
    <>
        <div className="compartment01">
          <div className="compartment01_subpart01">
            <div className="compartment01_subpart02">
              <div className="home01_logo">
                <img src={img} alt="Loading Error" />
                <p>CamHive</p>
              </div>
            </div>
            <div className="loading_dots_div">
                <div className="loading_dots_container">
                <div className="loading_dots"></div>
                <div className="loading_dots"></div>
                <div className="loading_dots"></div>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Compartment01
