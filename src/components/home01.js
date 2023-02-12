import react from "react";
import { useState } from "react";

import Compartment02 from "./Compartment02";
import Compartment01 from "./Compartment01";
function Home01() {
  return (
    <>
     <div className="home01_main_container">
        <Compartment01 />
        <Compartment02 />
      </div>
    </>
  );
}

export default Home01;
