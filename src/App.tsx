import "./App.css";
import Navbar from "./navbar/Navbar";
import Title from "./title/Title";
function App() {

  return (
    <>
      <div>
        <div className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">

        <Navbar />
        </div>

        <div className="flex justify-center">
        <Title />
        </div>
      </div>
    </>
  );
}

export default App;
