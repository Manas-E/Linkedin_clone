import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebasefile';
import "./Login.css"

function Login() {
    const src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqlqdGmgO2fsZkbVhwfw_haCxpLo0FTqkYjQS9k-JSKLACO3cJhokgFYaLXgLRdSwWds8&usqp=CAU";

    const name= useRef("");
    const password = useRef("");

    const photoURL=useRef("");
    const email= useRef("");

    const dispatch = useDispatch();


    const register= async ()=>{
        console.log(photoURL.current.value.length,"::", photoURL.current.value);

        if(( photoURL.current.value.length > 1000 ))
            alert("Size matters! Please enter a short URL");

        if(name.current.value!="" && ( photoURL.current.value.length <= 1000 ))
            await  auth.createUserWithEmailAndPassword(email.current.value,password.current.value)
         .then( async (userAuth)=>{
           
            console.log(userAuth," this is user auth")
            await userAuth.user.updateProfile({
                displayName:name.current.value,
                photoURL: photoURL.current.value,
            }).then( ()=>{
                console.log("=======",userAuth);

                alert("Registration Successful! Press ok to Continue");
    
                dispatch(login({
                    email: userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoURL: userAuth.user.photoURL,
                }))
            })  
        })
        .catch((error)=>{alert(error.message)});;

      
    }

    const LoginAsTest = ()=>{
        auth.signInWithEmailAndPassword("test@test.com","123456").then(
            (userAuth) =>{
                console.log(userAuth);
                dispatch(login({
                     
          email: userAuth.user.email,
          uid:userAuth.user.uid,
          displayName:userAuth.user.displayName,
          photoURL:userAuth.user.photoURL,
         
                }))
            }
        ).catch((err)=>{alert(err)})

    }
    const loginto=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email.current.value,password.current.value).then(
            (userAuth) =>{
                console.log(userAuth);
                dispatch(login({
                     
          email: userAuth.user.email,
          uid:userAuth.user.uid,
          displayName:userAuth.user.displayName,
          photoURL:userAuth.user.photoURL,
         
                }))
            }
        ).catch((err)=>{alert(err)})
    }
    
    return (
        <div className="login">
            
           <img src={src} />
           <form>


                <input ref={name}  type="text" placeholder="Full Name (Optional)" />   
                <input ref={photoURL} type="text" placeholder="Photo Pic URL (Optional)" />
                <input ref={email} type="email" placeholder="Email" />
                <input ref={password} type="password" placeholder="Password" />

                <button type="submit" onClick={loginto}>Sign in</button>
                <p>Not a Member?<span onClick={register} className="reg"> Register Now</span></p>
            </form>
            <button style={{padding:"10px", margin:"10px"}} onClick={LoginAsTest}>Login As Test User</button>

        </div>
    )
}

export default Login
