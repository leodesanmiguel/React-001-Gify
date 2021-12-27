import React, { useEffect, useState } from "react";
import "./App.css";
import getGifs from "./services/getGifs";
import ListofGifs from "./components/ListofGifs";
function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(function() {
    getGifs({ keyword: "argentina" }).then(gifs => setGifs(gifs));
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        <ListofGifs gifs={gifs} />
      </section>
    </div>
  );
}

export default App;
