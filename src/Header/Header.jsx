import React, { useEffect, useState } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { auth } from '../firebasefile';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { db } from '../firebasefile';
import { useHistory } from 'react-router-dom';


function Header() {

    const [show,setshow] =useState(false);
    const [input1,setinput1] = useState(null);
    var nameFound=false;
    const history = useHistory();

    const dispatch = useDispatch();

    const user = useSelector(selectUser);

    console.log("header::",user);
    
    
    const transitionnavbar = () =>{
        if(window.scrollY > 100)
            setshow(true)
        else{
            setshow(false);
        }    
    }


    const logoutfunction= ()=>{
        dispatch(logout());
        auth.signOut();



    }


    useEffect(( ) =>{

        window.addEventListener("scroll",transitionnavbar)
        return ()=> window.removeEventListener("scroll",transitionnavbar);

    }

    ,[]);

    
    const sendSearch =  async ()=>{
        const searchName = input1.toLowerCase();
        await db.collection("posts").get().then(
            
            (snapshot)=>{snapshot.docs.map(doc=>{
                const rec=doc.data();

                if(rec.name.toLowerCase() === searchName){
                    nameFound=true;
                }
            })}
           )
 
        if(nameFound)
    
            history.push("/search",searchName);
         

           
        else
        history.push("/search",null);
    }

           
        

    
    return (
        <div className={show? "header header_color": "header" }>
            <div className="headerLeft"> 

                <img className="hide" src="data:image/jpeg;base64,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" alt="icon"   />

                <div className="headerSearch">
                    
                   
                    <SearchIcon  className="SearchIcon"/>
                    
                        <input   onKeyDown={(e)=>( (e.key === "Enter")? sendSearch(): null )}  value={input1} onChange  ={(e)=>{setinput1(e.target.value)}} type="text" placeholder="Search for people" />



                </div>

            </div>

            <div className="headerRight"> 

                <HeaderOption title="Home" onClick={()=>{history.push("/")}} Icon={HomeIcon}/>                
                
                <div className="hide">
                <HeaderOption title="My Network" Icon={PeopleIcon}/>
                </div>
                <HeaderOption title='Jobs' Icon={BusinessCenterIcon} />

                <HeaderOption title='Messaging' Icon={ChatIcon} />
                <HeaderOption title='Notifications' Icon={NotificationsIcon} />
                <HeaderOption onClick={logoutfunction} avatar="dashdsb" title="Me"></HeaderOption>                


            </div>
            
  
        </div>

    )
}

export default Header
