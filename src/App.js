import Navbar from "./layout/Navbar";
import Home from "./Pages/Home";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUsers from "./users/AddUsers";
import EditUsers from "./users/EditUsers";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/adduser" element={<AddUsers/>}/>
        <Route exact path="/edituser/:id" element={<EditUsers/>}/>
      </Routes>
      
      </Router>
      
    </div>
  );
}

export default App;
