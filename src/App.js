import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import userContext from "./UserContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({});
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about/12345'>About</Link>
          </li>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
        </ul>
        <hr />

        <Switch>
          <userContext.Provider value={[user , setUser]}>
          <Route exact path='/'>
            <Home />
          </Route>
         
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          </userContext.Provider>
          <Route path='/about/:id'>
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
