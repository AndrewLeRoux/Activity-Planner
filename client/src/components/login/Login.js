import React, {useState} from "react";
import NewUserForm from "./NewUserForm";
import LoginForm from "./LoginForm";
import styled from "styled-components";

function Login({onLogin}){
    
    const [showLogin, setShowLogin] = useState(true);

    return(
    <div className = "login" style={{ 
        backgroundImage: `url("https://images.pexels.com/photos/235922/pexels-photo-235922.jpeg?cs=srgb&dl=pexels-pixabay-235922.jpg&fm=jpg")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height:'100%',
        margin: 0,
        padding: 0
        
        
      }}>
        <h1 id = "loginTitle">Activity Planner</h1>
        {/* <Image src ="https://www.hhmglobal.com/wp-content/uploads/news/29784/Exersize-696x393.jpg" alt="running" width="464" height="262"></Image> */}
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
background-color: blue;
border-radius: 20px;
padding: 8px 16px;
margin: 2px;
  `;


const Image = styled.img`
border-radius: 20px;
`


export default Login