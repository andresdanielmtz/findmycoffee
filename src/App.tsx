import "./App.css";
import Navbar from "./navbar/Navbar";
function App() {

  return (
    <>
      <div>
        <Navbar />
        <h1 className="mainTitle">
          {" "}
          Find My <div id="special_coffee">Coffee </div>☕️{" "}
        </h1>
        <h3> Let's find your ideal coffee place!</h3>
        <p className = "text-3 font-bold underline text-sky-400"> Tailwind works! </p>
        <button> Start </button>
      </div>
    </>
  );
}

export default App;
