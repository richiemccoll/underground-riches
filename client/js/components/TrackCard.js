import React from "react";

const TrackCard = (
  {
    id,
    title,
    artist,
    coverArt,
    playTrack,
    pauseTrack,
    isPlaying
  }
) => {
  return (
    <div className="Track-Card">
      <img alt="Track-cover-art" src={coverArt} />
      <h1>{title}</h1>
      <h2>{artist}</h2>

      <ul className="Track-Controls">
        <li className="Track-Controls-Play">
          {isPlaying
            ? <button onClick={() => pauseTrack()}>
                pause
              </button>
            : <button onClick={() => playTrack(id, title, artist)}>
                play
              </button>}
        </li>
      </ul>
    </div>
  );
};

export default TrackCard;
