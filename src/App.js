import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateAccount from "./Page/CreateAccount/CreateAccount";
import Home from "./Page/Home/Home";
import Login from "./Page/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/createaccount" Component={CreateAccount} />
        <Route path="/login" Component={Login} />
      </Routes>
    </Router>
  );
}

export default App;
