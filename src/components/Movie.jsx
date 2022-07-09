import React from "react";

function Movie({ movie }) {
  const {
    id,
    snippet: {
      channelTitle,
      title,
      thumbnails: {
        high: { url },
      },
    },
  } = movie;
  
  return (
    <a
      title={title}
      className="video"
      target="_blank"
      href={`https://www.youtube.com/watch?v=${id}`}
    >
      <img className="video__poster" src={url} alt="video" />
      <div>
        <img className="usuario" src={url} alt="usuario" />
        <div>
          <h2>{title}</h2>
          <p>{channelTitle}</p>
        </div>
      </div>
    </a>
  );
}

export default Movie;
