import React, { useRef, useState } from "react";
import "./SignupScreen.css"
import {auth} from "../firebase";



function SignupScreen(){

    const emailref = useRef("");
    
    const passwordref = useRef("");

    const register = (e)=>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailref.current.value,
            passwordref.current.value

        ).then((User)=>{
            console.log(User);
        }).catch(error => alert(error.message));

    }

    const signin =(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailref.current.value,
            passwordref.current.value

        ).then((User)=>{
            console.log(User);
            

        }).catch(error => alert(error.message));


    }

    return <div className="signupScreen">
                <form>

                    <h1>Sign In</h1>
                    <input ref={emailref} type="email" placeholder="Email Address" />
                    <input ref={passwordref} type="password" placeholder="Password" />
                    <button onClick={signin} type="submit">Sign In</button>                   
                    <h4><span className="signupScreen_gray">New to netflix? </span>
                    <span onClick={register} className="signupScreen_link"> Sign up Now.</span>
                     </h4>

                </form>   

            </div>

}

export default SignupScreen;
