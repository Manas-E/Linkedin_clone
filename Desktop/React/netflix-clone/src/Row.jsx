import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "./Request";
import "./Row.css";


function Row(props){

    const [movies,setmovies]= useState([]);

    useEffect(() => {
        function fetchdata(){
            
            const res= axios.get(props.fetchURL);
            res.then((result)=>{ 
                setmovies(result.data.results)
             })
            
        }
        
        fetchdata();
    },[props.fetchURL])

    console.log(movies);

    const base_imgURL="https://image.tmdb.org/t/p/original";

 return <div className='row' >
        <h1>{props.title}</h1>
        
<div className=' movielist ' > 
        {movies.map(
            (movie) =>  {
                return  ((props.isLarge && movie.poster_path) || 
                (!props.isLarge && movie.backdrop_path))  && (
                <img className={`movie  ${props.isLarge && 'large_poster'}`} 
                key={movie.id}
                src={`${base_imgURL}${props.isLarge ? movie.poster_path :  movie.backdrop_path}`} alt={movie.title} />
            ) }

        )
        }
        </div>
 
  </div>
}

export default Row;
