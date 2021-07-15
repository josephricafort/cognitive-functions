import { useState, useEffect } from "react";

import "./styles.css";

// import SoloLoop from "./containers/SoloLoop";
import CompareTypesGrid from "./containers/CompareTypesGrid";
// import GridLoop from "./containers/GridLoop";
// import Walkthrough from "./containers/Walkthrough";
import { personTypesData } from "./data/personTypesData";

export default function App() {
  const [counter, setCounter] = useState(0);
  const personTypesArray = personTypesData.map((d) => d.type);
  const loopTime = 1000;

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((c) => (c <= personTypesArray.length - 2 ? c + 1 : 0));
    }, loopTime);

    return () => clearInterval(timer);
  });

  return (
    <div className="App">
      {/* <GridLoop type={"ESTP"} counter={counter} /> */}
      <CompareTypesGrid counter={counter} />
    </div>
  );
}
