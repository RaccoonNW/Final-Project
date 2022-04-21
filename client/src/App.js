import { Switch, Route } from "react-router-dom"
import Signup from './Signup';
import NavBar from "./NavBar";

function App() {
  return (
    <>
    <NavBar/>
      <Switch>
        <Route path={"/signup"}>
          <Signup/>
        </Route>
      </Switch>
    </>
  )
}

export default App;
