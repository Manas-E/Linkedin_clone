import { Avatar } from '@material-ui/core'
import React, { useState,useEffect, useRef } from 'react'
import InputOption from './InputOption'
import "./Post.css"

import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@mui/icons-material/Delete';import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

import {forwardRef} from "react";
import { db } from './firebasefile';
import HeaderOption from './Header/HeaderOption';
import Comment from "./Comment"

import AddCircleIcon from '@mui/icons-material/AddCircle';
import FlipMove from "react-flip-move";

const  Post = forwardRef(( {name,desc,photoURL,msg,idData=0},ref)=> {

    const user = useSelector(selectUser);
    const [isLiked,setLiked]= useState(false);
    const [likeCount,setlikeCount] =useState(0);
    const  [iscomment,setiscomment] = useState(false);
    const [commentsList,setcommentsList] = useState([]);
    const comment  = useRef();


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

    const getcommentList = async ()=>{
        const getcomments =  await db.collection("posts").doc(idData).get().then((res)=>res.data().comments);

        if(getcomments!=undefined)
        {            
            setcommentsList([...getcomments])
        }

    }
            
    useEffect(()=>{
        if(idData)
        likeCountFunc(0);
        getcommentList();
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


  


    const addcomment = async (commentValue)=>{

        var comments = [];

        getcommentList();
        const commentData = {
            commentName: user.displayName, 
            commentPhotoURL: user.photoURL,
            commentMsg:  commentValue,
            commentUser: user.email,
        }

      
        commentsList.push(commentData)
        console.log(commentsList)
        const  data1 = await db.collection("posts").doc(idData).update({comments:commentsList}).then(
            (res)=>{ 
                console.log("comment added")
             }) 
            



    }

    const deleteData =  async ()=>{
        const  data1 = await db.collection("posts").doc(idData).delete().then(
            (res)=>{ 
                console.log("post deleted")
             }) 
    }


    const deleteComment =  async (idx)=>{

        commentsList.splice(idx,1);

        const  data1 = await db.collection("posts").doc(idData).update({comments:commentsList}).then(
            (res)=>{ 
                console.log("comment deleted")
             }) 
             
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
                <span  onClick={()=>setiscomment(!iscomment)}>  <InputOption name="Comment" Icon={CommentIcon} />
                </span>
    
              
                {/* <InputOption name="Share" Icon={ShareIcon} /> */}
                { name === user.displayName &&   <span onClick={()=>deleteData()}>   <InputOption   name="Delete" Icon={DeleteIcon} />   </span>}

            </div>
            {iscomment ?    <div>

                {/* {list of comments} */}
                {console.log(commentsList,"<<<<<<<<<<<<<<<<<<<<,<<<<<<<<<<<<<<<<<<<<<<<<<<")}
                
                <FlipMove>
                {commentsList.map((a,idx)=>
             
                    <Comment  a={a} key={idx} user={user} deleteComment={deleteComment}   idx={idx} />
              
                )}
                </FlipMove>
                  <div className="commentSection">
                    <HeaderOption  avatar="dashdsb" ></HeaderOption>                
                    <input ref={comment} />
                    <AddCircleIcon className="commentIcon fa-4x"  onClick={()=>addcomment(comment.current.value)}/>
                 </div>

                  
            </div> 
             :  ""}
        </div>
    )
})

export default Post
