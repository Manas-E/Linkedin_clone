import React, { useEffect } from "react";
import HomeScreen from "./screen/HomeScreen.jsx";
import LoginScreen from "./screen/LoginScreen.jsx";
import {auth} from "./firebase";
import {createStore, combineReducers} from 'redux';
import ProfileScreen from "./screen/ProfileScreen.jsx";

 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser, userSlice } from "./features/userSlice.js";



function App() {
  const user = useSelector(selectUser);
  const dispatch= useDispatch();

  // const user = null;

  useEffect(()=>{

    const unsubscribe = auth.onAuthStateChanged((authUser)=>
    {
       if(authUser)
        // Logged in
      dispatch(login({
        uid:authUser.uid,
        email:authUser.email
      }))
       else
       // Logged out
      dispatch(logout)

    });

     return unsubscribe;

  },[])


  return (
<div>
<Router>
  { !user ? (
   <LoginScreen  />
   )
 : (
   <Switch>
   
      <Route exact path="/">
        <HomeScreen/>
      </Route>


   <Route path="/profile">
    <ProfileScreen />
   </Route>
    
   {/* <Route exact path="/login">
   <LoginScreen/>
   </Route> */}

    </Switch>

  )}
   

   
</Router>
</div>

  );
}

export default App;

