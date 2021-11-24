import React, { useRef } from 'react'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {forwardRef} from "react";

import { Avatar } from '@material-ui/core'
import HeaderOption from './Header/HeaderOption';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import "./Comment.css"
 const Comment =forwardRef(({a,user,deleteComment,idx},ref) => {

    return (
        <div ref={ref} className="comment">
            <Avatar className="HeaderOption_icon" src={a.commentPhotoURL}>{!a.commentPhotoURL && !a.commentName[0] && "" }</Avatar>
            <div className="commentBody">
            <span ><h3>{a.commentName}</h3>                 
                {(a?.commentUser === user.email) &&  <span onClick={()=>deleteComment(idx)}>  <HighlightOffIcon className="commentDeleteIcon" />   </span>}
            </span>
           
            <p>{a.commentMsg}</p>

            </div>
          

    </div>

    )
})

export default Comment
