import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import "./SideBar.css"

function SideBar() {




    const recent = (topic) =>{
        return <div className="recentItems"> 
                <span>#</span>
                <h4>{topic}</h4>
               </div>
    }

    const user = useSelector(selectUser);




    return (
        <div className='sidebar'>
            <div className="sidebartop">

                <img  src="https://analyticsindiamag.com/wp-content/uploads/2020/10/7d744a684fe03ebc7e8de545f97739dd.jpg"/>
                <Avatar className='sidebartopAvatar' src={user.photoURL}>{!user.photoURL && user.displayName[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>


            </div>

            <div className="sidebarstats">
                
                <div className="sidebarstat">
                    
                    <p>Who viewed you</p>
                    <p className="sidebarstat_no">2,254</p>

                </div>

                <div className="sidebarstat">
                                
                    <p>Views on post</p>
                    <p className="sidebarstat_no">2,270</p>

                </div>
    
            </div>

            <div className="recentButton" >
            <h4 >Recent</h4>
            {recent("Machine")}
            {recent("Code")}
            {recent("React")}
            {recent("JavaScript")}
            {recent("Mahwak")}
            

            </div>

        </div>
    )
}

export default SideBar;

