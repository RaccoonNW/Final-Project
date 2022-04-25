// import { Switch, Route } from "react-router-dom"
// import Signup from './Signup';
import NavBar from "./NavBar";
import Login from "./Login";
// import Owners from "./Owners";
import Home from "./Home";
import CustomerOwnerData from "./CustomerOwnerData";
import CustomerHomeData from "./CustomerHomeData";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

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
  }, []);

  useEffect(() => {
    fetch('/owners').then((r) => {
      if (r.ok) {
        r.json().then((data) => setOwnerList(data))
      } else {
        r.json().then((data) => console.log(data))
      }
    });

    fetch('/houses').then((r) => {
      if (r.ok) {
        r.json().then((data) => setHouseList(data))
      } else {
        r.json().then((data) => console.log(data))
      }
    });

    fetch('/house_owners').then((r) => {
      if (r.ok) {
        r.json().then((data) => setHouseOwnerList(data))
      } else {
        r.json().then((data) => console.log(data))
      }
    })
  }, [])

  if (!user) {
    return <Login onLogin={setUser} user={user} />; 
  } else {
    return (
      <div>
      <NavBar user={user} setUser={setUser} ownerList={ownerList}/>
      <Routes>
        <Route path="/owners" element={<CustomerOwnerData ownerList={ownerList} houseList={houseList} houseOwnerList={houseOwnerList}/>}/>
        <Route path="/houses" element={<CustomerHomeData houseList={houseList}/>}/>
        <Route path="/" element={<Home user={user}/>}/>
      </Routes>
      </div>
    )
  }
}


export default App;
