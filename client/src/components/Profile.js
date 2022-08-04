import React, {useState} from "react";
import Activity from "./Activity";
import styled from "styled-components";
import Preferences from "./Preferences";

function Profile({user, activities, favorites, onAddFavorite, preferences, onPreferenceUpdate}){

    const [toggleMenu, setToggleMenu] = useState(null)

    const favoriteIds = favorites.map(favorite => {return favorite.activity_id})
    
    // filter out activities you've liked from list

    const filteredActivities = activities.filter(activity => {
        for (const preference of user.preferences){
            if (preference.name == activity.activity_type && !favoriteIds.includes(activity.id))
                return true
        }
    })

    function random_item(items){
    return items[Math.floor(Math.random()*items.length)];
    }
    const recommended = filteredActivities.map((activity) =>{ return <Activity user = {user} key = {activity.name} activity = {activity} favorites ={favorites} onAddFavorite={onAddFavorite}/>})
    const items = []
    
    for (let i = 0; i < 4; i++){
        const item = random_item(recommended)
        if (!items.includes(item)){
            items.push(item)
        }
    }


    function updatePreferences(){
        const newToggle = !toggleMenu
        setToggleMenu(newToggle)
    }

    return(
        <div className = "profile">
            <div className = "profileCard">
                <h1 id = "myProfile">My Profile</h1>
                <p>User: {user.name}</p>
                <p>Activity Preferences:</p>
                <ul id = "activityPreferences">
                    {user.preferences.map(activity => {return <li key = {activity.id}>{activity.name}</li>})}
                </ul>
                <Button onClick = {updatePreferences}>Update Activity Preferences</Button>
                <br></br>
                {toggleMenu? <Preferences onPreferenceUpdate={onPreferenceUpdate} preferences={preferences} user = {user}></Preferences> : null
                }
                
            </div>
            <h2>Recommended Activities</h2>
            {items}
        </div>
        
    )
}

const Button = styled.button`
  cursor: pointer;
  font-size: 12px;
  background-color: blue;
  border-radius: 20px;
  padding: 8px 16px;
  color: white;
  margin: 2px;

`;


export default Profile