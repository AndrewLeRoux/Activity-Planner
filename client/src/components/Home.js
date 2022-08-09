import React from "react";
import styled from "styled-components";

function Home(){
    return(
        <div className = "homepage"
        style={{ 
            backgroundImage: `url("https://media.istockphoto.com/vectors/sports-set-of-athletes-of-various-sports-disciplines-isolated-vector-vector-id1141191007?k=20&m=1141191007&s=612x612&w=0&h=CXC28y_ZRV1KvjISumj5w20bYn649HVi4yYTPWsKaZI=")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: 'calc(60vh)',
            width: 'calc(60vw)',
            backgroundPosition: 'center',
            
          }}
        >
            <br></br>
            <P>
            Welcome to the activity planner app!
            Need to find something new to do? You've come to the right place!
            Check out the activities tab to find the full list of activities,
            and add any that you like to your favorites list! You can also find some recommended
            activities based on your personal activity preferences in the profile tab.
            </P>
            
            
        </div>
        
    )

}

const P = styled.p`
background-color: #61dafb;
  border-radius: 20px;
  padding: 8px 16px;
  color: blue;
  margin: 2px;
  border-style: solid outset;
  border-color: black;
  position: relative;
  top: 60%;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`

export default Home