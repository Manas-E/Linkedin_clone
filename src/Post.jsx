import { Avatar } from '@material-ui/core'
import React, { useState,useEffect } from 'react'
import InputOption from './InputOption'
import "./Post.css"

import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

import {forwardRef} from "react";
import { db } from './firebasefile';



const  Post = forwardRef(( {name,desc,photoURL,msg,idData=0},ref)=> {

    const user = useSelector(selectUser);
    const [isLiked,setLiked]= useState(false);
    const [likeCount,setlikeCount] =useState(0);


    var likeNumber=31;
    const likeCountFunc = async (sign)=>{
        const  data1 = await db.collection("posts").doc(idData).get()
        .then(

            (res)=>{ 
                console.log("previous",res.data(),res.data().likeCount)
                setlikeCount(res.data().likeCount +1*(sign))
                likeNumber=res.data().likeCount +1*(sign);
                console.log("after increment :",likeCount,likeNumber)
            }) 
            
              await db.collection("posts").doc(idData).update( {likeCount: likeNumber})
          .then(
                (refData)=>{console.log("done",likeNumber,"updated ",refData)
            }) 
        
    }

            
    useEffect(()=>{
        if(idData)
        likeCountFunc(0);
    },[])

    const  likeAnimate= async ()=>{

        console.log("<===>", idData,isLiked);

        setLiked(!isLiked);
       
        console.log("<===>", idData,isLiked);
        if(isLiked && idData)
            likeCountFunc(-1);
        else
            likeCountFunc(1);

    }

    return (
        <div ref={ref} className={`post`}> 
           
            
            <div className="postHeader">
                <Avatar className="MuiAvatar-colorDefault" src={photoURL} >{!photoURL && name[0]  }</Avatar>

                <div className="postInfo">
                    <h2>{name}</h2>
                    <p>{desc}</p>
                </div>

            </div>
            <div className="postbody">
                <p>{msg}</p>
            </div>
            <div className="likeCounter"> 
                
                <ThumbUpAltOutlinedIcon  style={{ fontSize : 15 ,backgroundColor:"#ABC3F3",borderRadius:20, marginLeft:30,marginRight:10}}/>
                <span style={{fontSize:15}}>  {likeCount} </span>
            
            </div>
            <div className="post_buttons">

                <span  onClick={likeAnimate}><InputOption  name="Like" Icon={ThumbUpIcon} isClicked={isLiked}  />
                </span>
    
                <InputOption name="Comment" Icon={CommentIcon} />
                <InputOption name="Share" Icon={ShareIcon} />
                <InputOption  name="Send" Icon={SendIcon} />

            </div>
        </div>
    )
})

export default Post
