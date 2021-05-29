import React from 'react'
import "./InputOption.css"

 
function InputOption({name,Icon,color}) {
    return (
        <div className="inputoption" >
            

            {Icon && <Icon style={{color:color}}/>}
            
            <h4>{name}</h4>
            
                       
        </div>
    )
}

export default InputOption
