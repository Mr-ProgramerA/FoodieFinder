import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path = '/' element ={ <Home/> }></Route>
          <Route exact path = '/login' element ={ <Login/> }></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
