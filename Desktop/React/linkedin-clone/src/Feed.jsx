import React, { useEffect, useRef, useState } from 'react'
import "./Feed.css"
import CreateIcon from '@material-ui/icons/Create';
import PhotoIcon from '@material-ui/icons/Photo';
import InputOption from './InputOption';
import VideocamIcon from '@material-ui/icons/Videocam';
import EventIcon from '@material-ui/icons/Event';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from './firebasefile';
import firebase from "firebase";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';



function Feed() {
const [posts,setposts] = useState([]);
const [input,setinput] = useState("");

const user = useSelector(selectUser);

const sendPost = (e) =>{
    e.preventDefault();
    
    console.log(input);
    db.collection("posts").add({
        name: user.displayName,
        desc:user.email,
        msg:input,
        photoURL:user.photoURL || "",
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),

    });
}


useEffect(() => {
    db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot)=>{
        setposts(
            snapshot.docs.map((doc)=>({

                id: doc.id,
                data: doc.data(),
            })
        ));
    })
  

}, [])
    return (
        <div className="feed">
            <div className="feedcontainer_input">
                <div className="feed_input">
                    <form>

                    <CreateIcon />
                    <input value={input} onChange={(e)=>{ setinput(e.target.value) }} type="text" />
                    <button onClick={sendPost} type="submit" >Send</button>

                    </form>

                </div>

                <div className="feed_input_options">

                    <InputOption name="Photo" Icon={PhotoIcon} color="lightblue" />
               
                    <InputOption name="Video" Icon={VideocamIcon} color="red" />
               
                    <InputOption  name="Event" Icon={EventIcon} color="green" />
               
                    <InputOption name="Write Article" Icon={CalendarViewDayIcon} color="brown" />
               
                </div>

            </div>

        
           { posts.map(({id, data: {name,desc,msg,photoURL}}) =>
            <Post key={id}
                  name={name}
                  desc={desc}
                  msg={msg}
                  photoURL={photoURL}   />)}
        </div>
    )
}

export default Feed
