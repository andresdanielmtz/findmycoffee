import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 className="mainTitle">
          {" "}
          Find My <div id="special_coffee">Coffee </div>☕️{" "}
        </h1>
        <h3> Let's find your ideal coffee place! </h3>
        <button> Start </button>
      </div>
    </>
  );
}

export default App;
