import React, {useState} from "react";
import NewUserForm from "./NewUserForm";
import LoginForm from "./LoginForm";
import styled from "styled-components";

function Login({onLogin}){
    
    const [showLogin, setShowLogin] = useState(true);

    return(
    <div className = "login">
        <h1 id = "loginTitle">Activity Planner</h1>
        <img src ="https://www.hhmglobal.com/wp-content/uploads/news/29784/Exersize-696x393.jpg" alt="running" width="464" height="262"></img>
        {showLogin? (
            <>
                <LoginForm onLogin = {onLogin} />
                <p>Need to create an account?</p>
                <Button onClick = { () => setShowLogin(false)}> Signup</Button>
            </>
        ) : (
            <>
            <NewUserForm onLogin = {onLogin}/>
            <Button onClick = { () => setShowLogin(true)}> Login Page</Button>
            </>
        )}
        
        
    </div>
    )
}

const Button = styled.button`
cursor: pointer;
background-color: #61dafb;
border-radius: 20px;
padding: 8px 16px;
margin: 2px;
  `;



export default Login