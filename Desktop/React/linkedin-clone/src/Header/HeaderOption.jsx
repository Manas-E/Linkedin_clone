import React from 'react'
import "./HeaderOption.css";
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';


function HeaderOption({avatar,Icon, title,onClick}) {

    const user = useSelector(selectUser);
    console.log(user,"<>");
    console.log(user?.photoURL," = ", user?.displayName[0])
    return (
        <div className="headerOption">
            <div className="HeaderOption_icon" onClick={onClick}>
                {Icon && <Icon className="icon" />}
                {avatar &&  ( <Avatar className="HeaderOption_icon" src={user?.photoURL}>{!user?.photoURL && user?.displayName[0]}</Avatar>)}
            </div>

            <div >

            <h1 className="HeaderOption_title">{title} </h1>
            </div>

        
        
        </div>
        
    )
}

export default HeaderOption;
