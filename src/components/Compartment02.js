import { useState } from "react"
import Button from "./Button"
import { useNavigate } from "react-router-dom";


function Compartment02() {
    const navigator = useNavigate();
  
    const Clicked = () => {
        navigator("/Login")
        
    }
  return (
    <>
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
                        <Button value="Get Started  > " funcCall={Clicked}/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Compartment02


