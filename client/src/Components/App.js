import NavBar from "./NavBar";
import Home from "./Home";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Owners from "../owners_table_files/Owners";
import Houses from "../houses_table_files/Houses";
import AddOwnerForm from "./Forms/AddOwnerForm";
import LandingPage from "./LandingPage";
import Signup from "./Signup";
import LoadingIcon from "./LoadingIcon";
import LoginForm from "./LoginForm";

function App() {

  const [user, setUser] = useState(null)
  const [ownerList, setOwnerList] = useState([])
  const [houseList, setHouseList] = useState([])
  const [houseOwnerList, setHouseOwnerList] = useState([])
  const [isLoadingLogin, setIsLoadingLogin] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    setIsLoadingLogin(true)
    // auto-login
    if (user) {
      fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user), setIsLoadingLogin(false));
        } else {
          r.json().then((data) => console.log(data))
        }
      });
    } else {
      setUser(null)
    }
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
  }, [navigate])


  if (!user) {
    return (
      <div>
        <Routes>
          <Route path="/" element={<LandingPage onLogin={setUser} user={user}/>}/>
          <Route path="/login" element={<LoginForm onLogin={setUser} user={user} setIsLoadingLogin={setIsLoadingLogin}/>}/>
          <Route path="/signup" element={<Signup onLogin={setUser} setIsLoadingLogin={setIsLoadingLogin}/>}/>
        </Routes>
      </div>
    )
  } else {
    if(isLoadingLogin) {
      return (
        <LoadingIcon/>
      )
    } else {
      return (
        <div className="main-app-div">
        <NavBar user={user} setUser={setUser} setIsLoadingLogin={setIsLoadingLogin}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home user={user} houseList={houseList} ownerList={ownerList}/>}/>
          <Route path="/owners" element={<Owners user={user} ownerList={ownerList} setOwnerList={setOwnerList} houseOwnerList={houseOwnerList}/>}/>
          <Route path="/houses" element={<Houses houseList={houseList} setHouseList={setHouseList}/>}/>
          <Route path="/add-owner" element={<AddOwnerForm houseList={houseList} navigate={navigate}/>}/>
        </Routes>
        </div>
      )

    }
    }
}


export default App;
