import "./index.css";
import { useState } from "react";
import { login } from "./utils";
// import { useNavigate } from "react-router-dom"; 
// import { Link } from "react-router-dom"; 

const Login = () =>{
    // const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async(event) =>{
        event.preventDefault();
        const results = await login({username, password});
        // navigate('./users')
        console.log({results});
    }
    return(
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input placeholder="Enter username" type="text" onChange={(event)=>setUsername(event.target.value)}/>
            <br/>
            <input placeholder="Enter password" type="password" onChange={(event)=>setPassword(event.target.value)}/>
            <br/>
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;