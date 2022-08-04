import React from "react";
import Activity from "./Activity";

function Profile({user, activities, favorites, onAddFavorite}){

    // const favoriteIds = favorites.map(favorite => {return favorite.activity_id})
    
    // filter out activities you've liked from list

    function random_item(items){
    return items[Math.floor(Math.random()*items.length)];
    }
    const recommended = activities.map((activity) =>{ return <Activity user = {user} key = {activity.name} activity = {activity} favorites ={favorites} onAddFavorite={onAddFavorite}/>})
    const items = []
    
    for (let i = 0; i < 4; i++){
        const item = random_item(recommended)
        if (!items.includes(item)){
            items.push(item)
        }
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
            </div>
            <h2>Recommended Activities</h2>
            {items}
        </div>
        
    )
}

export default Profile