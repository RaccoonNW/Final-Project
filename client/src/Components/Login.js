// import React, { useState } from "react";
// import Signup from "./Signup";
// import LoginForm from "./LoginForm";

// function Login({ onLogin }) {
//     const [showLogin, setShowLogin] = useState(true)

//     return (
//         <div className="login-signup-main-div">
//             {/* {showLogin ? ( */}
//                 <div>
//                     <LoginForm onLogin={onLogin} setShowLogin={setShowLogin}/>
//                     {/* <div className="toggle-login-signup-div">
//                         <p>
//                             Don't have an account?
//                             <button className="toggle-login-signup-button" onClick={() => setShowLogin(false)}>
//                                 Sign Up
//                             </button>
//                         </p>

//                     </div> */}
//                 </div>
//             {/* ) : ( */}
//                 {/* <div>
//                     <Signup onLogin={onLogin} setShowLogin={setShowLogin}/> */}
//                     {/* <div className="toggle-login-signup-div">
//                         <p>
//                             Already have an account?
//                             <button className="toggle-login-signup-button" onClick={() => setShowLogin(true)}>
//                                 Log In
//                             </button>
//                         </p>
//                     </div> */}
//                 {/* </div> */}
//             {/* )} */}
//         </div>
//     )
// }

// export default Login