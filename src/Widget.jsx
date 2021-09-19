import React, { useEffect, useState } from 'react'
import "./Widget.css"
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import axios from "axios"
import requests from './request';



function Widget() {

    const [articles,setarticles] = useState([]);
    const truncate = (str,n)=>{
        return (str?.substr(0,n) + "...");
    }
    const news = (heading,sub,url)=>{
       
  return   <div className="article">
        <div className="articleleft"><FiberManualRecordIcon className="bullet"/> </div>
<div onClick={()=>{window.open(url);}} className="articleright">
        <h3   >{heading}</h3>

        <p>{sub}</p>

        </div>
    </div>
    }

    useEffect( ()=> { 
        function fetchdata(){
            console.log("===>",requests.techNews)
        const res =  axios.get(requests.techNews);


        res.then(result =>{ 
            console.log("data:",result.data.articles)
            setarticles(result.data.articles);
        });

    }
    fetchdata();
},[]);



    return (
        <div className="widget">
            <div className="widgetHeader">
            <h2>Linkedin News</h2>
            <InfoIcon className="blue"></InfoIcon> 
            </div>
        
        {news(articles[0]?.title,truncate(articles[0]?.description,30),articles[0]?.url )}
        {news(articles[1]?.title,truncate(articles[1]?.description,30),articles[1]?.url    )}
        {news(articles[2]?.title,truncate(articles[2]?.description,30),articles[2]?.url   )}
        {news(articles[3]?.title,truncate(articles[3]?.description,30),articles[3]?.url  )}
        
        </div>
    )
}

export default Widget
