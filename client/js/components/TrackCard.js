import React from 'react';

const TrackCard = () => {
  return (
    <div className="Track-Card">
      <img
        alt="Track-cover-art"
        src="https://i1.sndcdn.com/artworks-000217307371-zlvzi6-t500x500.jpg"
      />
      <h1>Track title</h1>
      <h2>Track artist</h2>
      <ul className="Track-Social-Links">
        <li>
          <img src="./facebook-icon.png" alt="artist-facebook" />
        </li>
        <li>
          <img src="./twitter-icon.png" alt="artist-twitter" />
        </li>
        <li>
          <img src="./soundcloud-icon.png" alt="artist-soundcloud" />
        </li>
        <li>
          <img src="./instagram-icon.png" alt="artist-instagram" />
        </li>
      </ul>
      <ul className="Track-Controls">
        <li className="Track-Controls-Play">
          <button><img src="./play-button.png" alt="play-icon" /></button>
        </li>
      </ul>
      <ul className="Track-Volume-Controls">
        <li><img src="./mute-icon.png" alt="track-mute" /></li>
        <li><input type="range" max="100" /></li>
        <li><img src="./volume-icon.png" alt="track-volume" /></li>
      </ul>
    </div>
  );
};

export default TrackCard;