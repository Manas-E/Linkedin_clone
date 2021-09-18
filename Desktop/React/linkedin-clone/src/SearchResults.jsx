import React, { useEffect, useState } from 'react';
import Header from './Header/Header'
import { useHistory } from 'react-router-dom';
import { db } from './firebasefile';
import "./SearchResults.css"
import Post from './Post';
import SearchFeed from "./SearchFeed.jsx"

import FlipMove from "react-flip-move";


function SearchResults() {
    const history = useHistory();

    const searchName =history.location.state;
    const isFound = searchName ? true : false;

    const [searchData,setsearchData] =useState([]);

    console.log(searchName,">>>>>>>>>>>>>>>>>>>>",history);
    var searches = [];
  
    useEffect( async ()=>{
        await db.collection("posts").get().then(
            
            (snapshot)=>{snapshot.docs.map(doc=>{
                const rec=doc.data();
               
                if(rec.name.toLowerCase() === searchName){
                  setsearchData(a => [...a,rec])
                }          

            })}
        )
    },[]);     
    


    function notFound(){

        return <div  class="error">
            <h1> 404 Not Found</h1>
        </div>
    }

   
   function found(){
      
            console.log(searchData,"<<<<<<<<<<<<<<<<<<<<===============")
            return <div style={{display:"flex",alignItems:"center",justifyContent:"center",paddingTop:10}}>  
            <FlipMove>    
            { searchData.map(({name,desc,msg,photoURL})=>{
                 
                  
                   return  <SearchFeed
                   key= {msg}
                  
                   name={name}
                   desc={desc}
                   msg={msg}
                   photoURL={photoURL} 
                     />
                    
            })}

    </FlipMove>
            </div>
        }
        
   


    

    return (
        <div>
                <Header />
              
                { (isFound) ? found()  : notFound()}
            
        </div>
    )
}

export default SearchResults
