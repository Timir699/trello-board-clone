import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeMenu from "./components/home/HomeMenu";
import Lists from "./components/boards/BoardDetails";

function App() {
  return (
    <div className="home-container">
      <Routes>
        <Route path="/hello" element={<h2>Hello</h2>} />
        <Route path="board/:id" element={<Lists />} />
      </Routes>
      <HomeMenu />
    </div>
  );
}

export default App;
