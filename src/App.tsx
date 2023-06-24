import "./App.css";
import Navbar from "./navbar/Navbar";
import Title from "./title/Title";
import Dashboard from "./dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div
          className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <Navbar />
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <div className="flex justify-center">
                <Title />
              </div>
            }
          />
          <Route
            path="/home"
            element={
              <div className="flex justify-center">
                <Title />
              </div>
            }
          />
          <Route 
            path="/dashboard"
            element={
              <Dashboard />
            }
          />

          <Route
            path="/aboutUs"
            element={
              <div className="flex justify-center">
                <h1> About Us </h1>
              </div>
            }
          />
          <Route
            path="/profile"
            element={
              <div className="flex justify-center">
                <h1> Profile </h1>
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
