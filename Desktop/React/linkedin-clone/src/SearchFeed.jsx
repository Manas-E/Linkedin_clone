import "./SearchResults.css"
import {forwardRef} from "react";
import { Avatar } from '@material-ui/core'


const SearchFeed =forwardRef(({name,desc,photoURL,msg},ref)=>{
    return (
        <div ref={ref} className="searchFeed"> 
           
            
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
           
           
        </div>
    )
})

export default SearchFeed;
