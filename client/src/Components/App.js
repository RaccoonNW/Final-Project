import NavBar from "./NavBar";
import Login from "./Login";
import Home from "./Home";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Owners from "../owners_table_files/Owners";
import Houses from "../houses_table_files/Houses";

function App() {

  const [user, setUser] = useState(null)
  const [houseOwnerList, setHouseOwnerList] = useState([])
  console.log(houseOwnerList)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((data) => console.log(data))
      }
    });
    //House Owner Data - Unused so far
    fetch('/house_owners').then((r) => {
      if (r.ok) {
        r.json().then((data) => setHouseOwnerList(data))
      } else {
        r.json().then((data) => console.log(data))
      }
    })
  }, []);

  if (!user) {
    return <Login onLogin={setUser} user={user} />; 
  } else {
    return (
      <div>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/owners" element={<Owners/>}/>
        <Route path="/houses" element={<Houses/>}/>
        <Route path="/" element={<Home user={user}/>}/>
      </Routes>
      </div>
    )
  }
}


export default App;