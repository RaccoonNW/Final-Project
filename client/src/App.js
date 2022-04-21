// import { Switch, Route } from "react-router-dom"
// import Signup from './Signup';
import NavBar from "./NavBar";
import Login from "./Login";
import { useState, useEffect } from "react";

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((data) => console.log(data))
      }
    });
  }, []);

  if (!user) {
    return <Login onLogin={setUser} user={user} />; 
  } else {
    return (
      <div>
      <NavBar user={user} setUser={setUser}/>
        {/* <Switch> */}
          {/* <Route>
          </Route> */}
        {/* </Switch> */}
      </div>
    )
  }
}


export default App;
