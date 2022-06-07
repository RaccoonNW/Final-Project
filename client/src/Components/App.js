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
  const [isLoadingLogin, setIsLoadingLogin] = useState(false)
  const [loggedInLocal, setLoggedInLocal] = useState(
    JSON.parse(localStorage.getItem('logged-in'))
  )

  const navigate = useNavigate()

  useEffect(() => {
    if (loggedInLocal) {
      console.log(loggedInLocal)
      fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user), setIsLoadingLogin(false));
        } else {
          r.json().then((data) => console.log(data))
        }
      });
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
  }, [navigate])


  if (!user) {
    return (
      <div>
        <Routes>
          <Route path="/" element={<LandingPage onLogin={setUser} user={user}/>}/>
          <Route path="/login" element={<LoginForm onLogin={setUser} user={user} setIsLoadingLogin={setIsLoadingLogin} setLoggedInLocal={setLoggedInLocal}/>}/>
          <Route path="/signup" element={<Signup onLogin={setUser} setIsLoadingLogin={setIsLoadingLogin} setLoggedInLocal={setLoggedInLocal}/>}/>
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
          <Route path="/owners" element={<Owners user={user} ownerList={ownerList} setOwnerList={setOwnerList}/>}/>
          <Route path="/houses" element={<Houses houseList={houseList} setHouseList={setHouseList}/>}/>
          <Route path="/add-owner" element={<AddOwnerForm houseList={houseList} navigate={navigate}/>}/>
        </Routes>
        </div>
      )

    }
    }
}


export default App;
