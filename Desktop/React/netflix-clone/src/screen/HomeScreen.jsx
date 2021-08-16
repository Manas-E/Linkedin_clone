import React from "react";
import Nav from "../Nav.jsx";
import Banner from "../Banner.jsx";
import Row from "../Row.jsx";
import requests from '../Request';
import '../a.css'

function HomeScreen(){

    return <div className='main'>

                <Nav />
                <Banner />
                <Row title='Netflix Originals' fetchURL={requests.fetchNetflixOriginals} isLarge={true} />
                <Row title='Comedy Movies' fetchURL={requests.fetchComedyMovies} isLarge={false} />
                <Row title='Documentaries ' fetchURL={requests.fetchDocumentaries} isLarge={false} />
                <Row title='Horror Movies' fetchURL={requests.fetchHorrorMovies} isLarge={false} />
                <Row title='Romantic Movies' fetchURL={requests.fetchRomanceMovies} isLarge={false} />
                <Row title='Trending' fetchURL={requests.fetchTrending} isLarge={false} />
                
            
    </div>

}

export default HomeScreen;
