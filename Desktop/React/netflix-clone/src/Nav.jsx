import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./Nav.css";


function Nav(){

    const [show,setshow] =useState(false);
    const history =useHistory();


    const transitionnavbar = () =>{
        if(window.scrollY > 100)
            setshow(true)
        else{
            setshow(false);
        }    
    }

    useEffect(( ) =>{

        window.addEventListener("scroll",transitionnavbar)
        return ()=> window.removeEventListener("scroll",transitionnavbar);

    }

    ,[]);

    console.log(show);
    

    return <div className={(show)? "nav nav_black" : "nav" }>
        <div className="nav_content">
        
        <img onClick={()=>{history.push("/")}} src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
         className="nav_logo" />

        <img onClick={()=>{history.push("/profile")}} src="data:image/png;base64,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"
         className="nav_avatar" />

        </div>
        

        </div>

}

export default Nav;
