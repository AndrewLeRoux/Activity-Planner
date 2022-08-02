import React, {useState} from "react";
import Error from "../styles/Error";
import styled from "styled-components";
import Tile from "../styles/Tile";


function NewUserForm({onLogin}){


    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [bio, setBio] = useState("");
    const [errors, setErrors] = useState([]);


    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        
        const formData = new FormData()
        formData.append('name', name)
        formData.append('username', username)
        formData.append('password', password)
        formData.append('password_confirmation', passwordConfirmation)
        formData.append('bio', bio)
        
        console.log(formData.get("password"))

        fetch("/signup", {
          method: "POST",
          body: formData,
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => onLogin(user));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }


    return(
        <div className = "form-container">
        <h2 className = "titles">Create new User</h2>
        <form onSubmit={handleSubmit}>
        <Input
            type="text"
            name = "name"
            placeholder= "name..."
            onChange={(e) => setName(e.target.value)}
            value={name}
        />
        <br/>
            <Input
            type="text"
            name = "username"
            placeholder= "username..."
            onChange={(e) => setUsername(e.target.value)}
            value={username}
        />
        <br/>
        <Input
            type="password"
            name = "password"
            placeholder= "password..."
            onChange={(e) => setPassword(e.target.value)}
            value={password}
        />
        <br/>
        <Input
            type="password"
            name = "password confirmation"
            placeholder= "password confirmation..."
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            value={passwordConfirmation}
        />
        <br/>
        <Input
            type="text"
            name = "bio"
            placeholder= "bio..."
            onChange={(e) => setBio(e.target.value)}
            value={bio}
        />
        <br/>
        <Button type="submit">Create Account</Button>
        </form>
        {errors.map(error => {return <Error key = {error}>{error}</Error>})}
    </div>
    )
}


const Input = styled.input`
	padding: 0.5em;
	color: black;
	background: white;
	border: none;
	border-radius: 3px;
	width: 50%;
	margin-bottom: 0.5em;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: orange;
  border-radius: 20px;
  padding: 8px 16px;
  margin: 2px;
`;


export default NewUserForm