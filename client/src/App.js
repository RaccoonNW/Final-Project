// import { Switch, Route } from "react-router-dom"
// import Signup from './Signup';
import NavBar from "./NavBar";
import Login from "./Login";
import Owners from "./Owners";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

function App() {

  const [user, setUser] = useState(null)
  const [ownerList, setOwnerList] = useState([])

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((data) => console.log(data))
      }
    });

    // fetch('/owners').then((r) => {
    //   if (r.ok) {
    //     r.json().then((data) => setOwnerList(data))
    //   } else {
    //     r.json().then((data) => console.log(data))
    //   }
    // })
  }, []);

  useEffect(() => {
    fetch('/owners').then((r) => {
      if (r.ok) {
        r.json().then((data) => setOwnerList(data))
      } else {
        r.json().then((data) => console.log(data))
      }
    })
  }, [user])

  if (!user) {
    return <Login onLogin={setUser} user={user} />; 
  } else {
    return (
      <div>
      <NavBar user={user} setUser={setUser} ownerList={ownerList}/>
      <Routes>
        <Route path="/owners" element={<Owners ownerList={ownerList}/>}/>

      </Routes>
      </div>
    )
  }
}


export default App;
