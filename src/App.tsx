import {
  BrowserRouter as Router,
} from "react-router-dom";

import { Navbar } from "./components";

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
