import React from 'react'
import "./InputOption.css"

 
function InputOption({name,Icon,color,isClicked}) {
    return (
        <div className="inputoption" >
            

            {Icon && <Icon className={`${isClicked ? "likeAnimate" : '' }`}  style={ { color: isClicked? "blue" : "" }}/>}
            
            <h4>{name}</h4>
            
                       
        </div>
    )
}

export default InputOption
