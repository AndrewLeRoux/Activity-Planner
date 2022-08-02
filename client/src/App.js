import React, {useState, useEffect} from "react";
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Activities from "./components/Activities";
import Favorites from "./components/Favorites";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Login from "./components/login/Login";
import Home from "./components/Home"


function App() {

  const [activities, setActivities] = useState([])
  const [user, setUser] = useState(null)
  const [favorites, setFavorites] = useState([])
  const [preferences, setPreferences] = useState([])
  
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    async function getActivities() {
      const r = await fetch("/activities")
      if (r.ok) {
        r.json().then((activities) => setActivities(activities))
      }
    }

    async function getFavorites() {
      const r = await fetch("/favorites")
      if (r.ok) {
        r.json().then((favs) => setFavorites(favs))
      }
    }

    async function getPreferences() {
      const r = await fetch("/preferences")
      if (r.ok) {
        r.json().then((preferences) => setPreferences(preferences))
      }
    }

    getActivities();
    getFavorites();
    getPreferences();
    

  }, [user])


  function handleAddFavorite(newFavorite){
    
    const updatedFavorites = [...favorites, newFavorite]
    setFavorites(updatedFavorites)
  }

  function handleDelete(deletedFavorite){
    const newFavorites = favorites.filter(favorite => !(favorite.activity_id === deletedFavorite.activity_id && favorite.user_id === deletedFavorite.user_id))
    setFavorites(newFavorites)
  }
  
  if (!user) return <Login onLogin={setUser}/>
  return (
    <div className = "app">
      <NavBar setUser={setUser}/>
      <Switch>
        <Route exact path="/profile">
        <Profile activities = {activities} user = {user} favorites ={favorites} onAddFavorite={handleAddFavorite}/>
        </Route>
        <Route exact path="/favorites">
        <Favorites user = {user} favorites ={favorites} onDelete={handleDelete}/>
        </Route>
        <Route exact path="/activities">
          <Activities activities = {activities} user = {user} favorites ={favorites} onAddFavorite={handleAddFavorite}/>
        </Route>
        <Route exact path="/">
        <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
