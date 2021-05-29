import { Avatar } from '@material-ui/core'
import React from 'react'
import InputOption from './InputOption'
import "./Post.css"

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Post({name,desc,photoURL,msg}) {

    const user = useSelector(selectUser);


    return (
        <div className="post">
            
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
            <div className="post_buttons">

                <InputOption name="Like" Icon={ThumbUpIcon} />
                <InputOption name="Comment" Icon={CommentIcon} />
                <InputOption name="Share" Icon={ShareIcon} />
                <InputOption  name="Send" Icon={SendIcon} />
                
                

            </div>
        </div>
    )
}

export default Post
