import React, { useEffect, useState } from 'react';
import './App.css';

const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=XBXAw6y6bjgTEFBWeS5oAj2dNvquIrTv&q=cat&limit=10&offset=0&rating=g&lang=en';

function App() {
    const [gifs, setGifs] = useState([]);

    useEffect(function() {
        console.log('actualizando los gifs')
        fetch(apiURL)
            .then(res => res.json())
            .then(response => {
                const { data } = response;
                const gifs = data.map(imagenes => imagenes.images.downsized_medium.url);
                setGifs(gifs);
                console.log(gifs);
            })

    }, []);


    return ( <
        div className = "App" >
        <
        section className = "App-content" > {
            gifs.map(singleGif => < img src = { singleGif }
                />)
            } < /
            section > <
            /div>
        );
    }

    export default App;