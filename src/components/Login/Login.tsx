import React from "react";
import { LoginWithGoogle } from "../../firebase/LoginWithGoogle"; // Adjust the import path as necessary

function Login() {
    return (
        <div>
            <button onClick={LoginWithGoogle}>Sign in With Google</button>
        </div>
    );
}

export default Login;

