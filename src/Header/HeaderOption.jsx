import React from 'react'
import "./HeaderOption.css";
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';


function HeaderOption({avatar,Icon, title,onClick}) {

    const user = useSelector(selectUser);
    
    if(user && !user?.photoURL)
        return (
           null
        )

    return (


        <div className="headerOption">
            <div className="HeaderOption_icon" onClick={onClick}>
                {Icon && <Icon className="icon" />}
                {avatar &&  ( <Avatar className="HeaderOption_icon" src={user?.photoURL}>{!user?.photoURL && !user?.displayName[0] && "" }</Avatar>)}
            </div>

            <div >
            {title &&    <h1 className="HeaderOption_title">{title} </h1>
 }
            </div>

        
        
        </div>
        
    )
}

export default HeaderOption;
