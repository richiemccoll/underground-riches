import React from "react";
import play from './images/play.png';
import pause from './images/pause.png';

const TrackCard = (
  {
    id,
    title,
    artist,
    coverArt,
    streamURL,
    playTrack,
    pauseTrack,
    isPlaying
  }
) => {
  return (
    <div className="Track-Card">
      <img alt="Track-cover-art" className="Track-Card-Background-Img" src={coverArt} />
      <div className="Track-Controls-Play">
        {isPlaying
          ? <button onClick={() => pauseTrack()}>
              <img src={pause} className="Track-Controls-Image" alt="pause track" />
            </button>
          : <button onClick={() => playTrack({ id, title, artist, streamURL })}>
             <img src={play} className="Track-Controls-Image" alt="play track" />
            </button>}
      </div>
      <h1>{title}</h1>
      <h2>{artist}</h2>
    </div>
  );
};

export default TrackCard;
