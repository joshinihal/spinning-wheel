import { useState } from "react";

import "./App.css";
import Wheel from "./components/Wheel";
import Option from "./components/Option";

function App() {
  const defaultWheelContent = [1, 2, 3, 4, 5, 6];
  const [wheelContent, setWheelContent] = useState(defaultWheelContent);

  const handleCountChange = (count) => {
    setWheelContent((prev)=>{
      // whenever the count changes, create an array if that length.
      return [...Array(count).keys()].map(x => x + 1);
    });
  };

  return (
    <div className="App">
      <header className="app-header">Spin the Wheel!</header>
      <Option onCountChange={handleCountChange}/>
      <Wheel wheelContent={wheelContent}/>
    </div>
  );
}

export default App;
