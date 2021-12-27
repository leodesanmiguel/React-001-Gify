import React from "react";
import Gif from "./Gif";

export default function ListofGifs({ gifs }) {
  return gifs.map(({ id, title, url }) =>
    <Gif key={id} title={title} url={url} id={id} />
  );
}
