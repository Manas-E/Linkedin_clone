import React, { useState } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";


function LoginScreen(){
    const [signin,setsignin] = useState(false);



    return <div className="loginScreen">

        <img className="loginScreen_logo" src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" alt="Netlix logo" /> 

        <button onClick={()=>{setsignin(true)}} className="loginScreen_button" >Sign in</button>

        <div className="loginScreen_gradient"></div>

        { signin ? <SignupScreen /> :         
           ( <div className="loginScreen_body"> 
            <h1> Unlimited films, TV programmes 
            and More. </h1> 
            <h2> Watch anywhere. Cancel anytime </h2> 

            <h3> Ready to watch? Enter your mail to create or restart your membership </h3>

            
            <div className="loginScreen_input"> 
                <form>
                <input type="email" placeholder="Email Address" />
                <button onClick={()=>{setsignin(true)}} className="loginScreen_input_button">GET STARTED </button>
                </form>

            </div> 
            
        </div>

            )}





    </div>

}


export default LoginScreen;
