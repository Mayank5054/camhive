import react from "react";
import { useState } from "react";
import img from "../images/tesla.png";
import React from "react";

function Home01() {
  return (
    <>
      <div className="home01_main_container">
        <div className="compartment01">
          <div className="compartment01_subpart01">
            <div className="compartment01_subpart02">
              <div className="home01_logo">
                <img src={img} alt="not loaded" />
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
        <div className="compartment02">
            <div className="compartment02_subpart01">
                <div className="compartment02_subpart02 compartment02_general">
                    <div className="compartment02_general compartment02_title">
                        <p>Campus Hive</p>

                    </div>
                    <div className="compartment02_general compartment02_body">
                        <div className="temp compartment02_general">
                            <p>
                            it ‘s a site where you can find your collegues , date a friend and enjoy with your friendsit ‘s a site where you can find your collegues , date a friend and enjoy with your friendsit ‘s a site where you can find your collegues , date a friend and enjoy with your friendsit ‘s a site where you can find your collegues , date a friend and enjoy with your friendit ‘s a site where you can find your collegues , date a friend and enjoy with your friendsit ‘s a site where you can find your collegues , date a friend and enjoy with your friendsit ‘s a site where you can find your collegues , date a friend and enjoy with your friendsit ‘s a site where you can find your collegues , date a friend and enjoy with your friendsit ‘s a site where you can find your collegues , date a friend and enjoy with your friendsit ‘s a site where you can find your collegues , date a friend and enjoy with your friendsit ‘s a site where you can find your collegues , date a friend and enjoy with your friendsit ‘s a site where you can find your collegues , date a friend and enjoy with your friendss
                            </p>

                        </div>
                    </div>
                    <div className="compartment02_general compartment02_button">
                        
                    </div>
                    

                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Home01;
