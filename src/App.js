import React, { useEffect, useState } from "react";
import "./App.css";
import getGifs from "./services/getGifs";
import Gif from "./components/Gif";
function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(function() {
    getGifs({ keyword: "developper" }).then(gifs => setGifs(gifs));
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        {gifs.map(singleGif =>
          <Gif 
          key={singleGif.id}
          title={singleGif.title} 
          url={singleGif.url} 
          id={singleGif.id} />
        )}
      </section>
    </div>
  );
}

export default App;
