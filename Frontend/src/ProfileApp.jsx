import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import BackgroundVideo from "./videoplayback2.mp4";
import Window from './Profilecomponents/Window'
import NightmodButton from "./Profilecomponents/Nightmod.jsx"
import './ProfileIndex.css'
function  App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="ProfilePageContainer">
      <Window />
      <NightmodButton/>
      <div className="container">
        <video autoPlay loop muted width="320" height="240" id="video">
          <source src={"./videoplayback2.mp4"} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;
