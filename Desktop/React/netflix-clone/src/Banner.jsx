import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "axios";
import requests from "./Request";




function Banner(){

    const [movie,setmovie] = useState([]);

    useEffect( ()=> { 
        function fetchdata(){

        const res =  axios.get(requests.fetchTrending);


        res.then(result =>{ 
            setmovie(()=> result.data.results[Math.floor(Math.random()*result.data.results.length -1)]);
         });

    }
    
    
    fetchdata();

},[])

console.log("movie : ",movie);


    
    const truncate = (string,n)=>{
        return string?.length > n ? string.substr(0,n) + '...' : string;


    };

    return <div>

    <header className ="Banner" style={{
        backgroundSize: "cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}" )`,
        backgroundPosition : "center center"

    }}>

    <div className = "banner_content">
        <h1 className="banner_title">{movie?.original_title} </h1>
        <div className="banner_buttons">
            <button className="banner_button"> Play </button>

            <button className="banner_button"> Mylist </button>

        </div>
        <p className="desc">{truncate(movie?.overview,150)}</p>

        

    
    </div>
    <div className="banner_fadebottom"> </div>

    </header>

    </div>

}

export default Banner;
