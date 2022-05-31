import NavBar from "./NavBar";
import Login from "./Login";
import Home from "./Home";
import { useState, useEffect } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Owners from "../owners_table_files/Owners";
import Houses from "../houses_table_files/Houses";
import AddOwnerForm from "./Forms/AddOwnerForm";
import LandingPage from "./LandingPage";
import Signup from "./Signup";

function App() {

  const [user, setUser] = useState(null)
  const [ownerList, setOwnerList] = useState([])
  const [houseList, setHouseList] = useState([])
  const [houseOwnerList, setHouseOwnerList] = useState([])

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

  useEffect(() => {
      fetch('/owners').then((r) => {
          if (r.ok) {
            r.json().then((data) => setOwnerList(data))
          } else {
            r.json().then((data) => console.log(data))
          }
        });
  }, [user])

  useEffect(() => {
      fetch('/houses').then((r) => {
          if (r.ok) {
            r.json().then((data) => setHouseList(data))
          } else {
            r.json().then((data) => console.log(data))
          }
        });
  }, [user])

  if (!user) {
    return (
      <div>
        <Routes>
          <Route path="/" element={<LandingPage onLogin={setUser} user={user}/>}/>
          <Route path="/login" element={<Login onLogin={setUser} user={user}/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </div>
    )
  } else {
    return (
      <div>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/home" element={<Home user={user} houseList={houseList} ownerList={ownerList}/>}/>
        <Route path="/owners" element={<Owners user={user} ownerList={ownerList} setOwnerList={setOwnerList}/>}/>
        <Route path="/houses" element={<Houses houseList={houseList} setHouseList={setHouseList}/>}/>
        <Route path="/add-owner" element={<AddOwnerForm houseList={houseList}/>}/>
      </Routes>
      </div>
    )
  }
}


export default App;
