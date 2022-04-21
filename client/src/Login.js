import React, { useState } from "react";
import Signup from "./Signup";
import LoginForm from "./LoginForm";

function Login( {onLogin}) {
    const [showLogin, setShowLogin] = useState(true)
    // const [isShown, setIsShown] = useState(false)

    return (
        <div>
            {showLogin ? (
                <div>
                    <LoginForm onLogin={onLogin}/>
                    <p>
                        Don't have an account?
                        <button onClick={() => setShowLogin(false)}>
                            Sign Up
                        </button>
                    </p>
                </div>
            ) : (
                <div>
                    <Signup onLogin={onLogin}/>
                    <p>
                        Already have an account?
                        <button onClick={() => setShowLogin(true)}>
                            Log In
                        </button>
                    </p>
                </div>
            )}
        </div>
    )
}

export default Login