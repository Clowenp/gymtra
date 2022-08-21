
import Navbar from "./Components/Navbar";
import { Route, Switch, Router } from "react-router-dom";
import Home from "./Home";
import Today from "./Today";
import Progress from "./Progress";
import Calendar from "./Calendar";
import Friends from "./Friends";
import Contact from "./Contact";

function App() {
  return (
    // <Router>
      <div>
        <Navbar></Navbar>
        <Home></Home>
{/* 
        <Switch>
          <Route exact path ="/">
            <Home></Home>
          </Route>
          <Route path="/Today">
            <Today></Today>
          </Route>
          <Route path="/Progress">
            <Progress></Progress>
          </Route>
          <Route path="/Calendar">
            <Calendar></Calendar>
          </Route>
          <Route path="/Friends">
            <Friends></Friends>
          </Route>
          <Route path="/Contact">
            <Contact></Contact>
          </Route>
        </Switch>
        */}
      </div>
    //</Router>
  );
}

export default App;
