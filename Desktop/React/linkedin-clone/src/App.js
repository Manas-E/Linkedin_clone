import './App.css';
import Header from './Header/Header'
import SideBar from "./SideBar"
import Feed from "./Feed"
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { auth } from './firebasefile';
import Widget from "./Widget";


function App() {
 
  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth)
      {
        console.log("hello",userAuth);

        dispatch(login({
          
          email: userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
          photoURL:userAuth.photoURL,
        }))
      }
      else{
          dispatch(logout());


      }
    })
  },[]);



  return (
    <div className="App">

{/* Header */}

    <Header />

    {(!user)? <Login /> : 
    ( 

    <div className="app_body">
    <div className="sidebardiv">
      <SideBar />
    </div>

      <Feed />

{/* 
    widget  */}
  <Widget/>
    



    </div>
    )}
    </div>
    
  );
}

export default App;
