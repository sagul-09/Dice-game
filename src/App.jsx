import "./App.css";
import Dice from "./components/Dice";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Game</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Dice />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
