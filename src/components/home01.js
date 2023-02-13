import Compartment02 from "./Compartment02";
import Compartment01 from "./Compartment01";

import Login from "./Login";
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
