import React from "react";

const TrackCard = (
  {
    id,
    title,
    artist,
    coverArt,
    artistFacebook,
    artistSoundcloud,
    artistTwitter,
    artistInstagram,
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
      <ul className="Track-Social-Links">
        {artistFacebook && <FacebookLink url={artistFacebook} />}
        {artistSoundcloud && <SoundcloudLink url={artistSoundcloud} />}
        {artistTwitter && <TwitterLink url={artistTwitter} />}
        {artistInstagram && <InstagramLink url={artistInstagram} />}
      </ul>
      <ul className="Track-Controls">
        <li className="Track-Controls-Play">
          {isPlaying
            ? <button onClick={() => pauseTrack()}>
                <img src="./pause-button.png" alt="pause-icon" />
              </button>
            : <button onClick={() => playTrack(id, title, artist)}>
                <img src="./play-button.png" alt="play-icon" />
              </button>}
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

let FacebookLink = ({ url }) => (
  <a href={url}>
    <li><img src="./facebook-icon.png" alt="artist-facebook" /></li>
  </a>
);

let TwitterLink = ({ url }) => (
  <a href={url}>
    <li><img src="./twitter-icon.png" alt="artist-twitter" /></li>
  </a>
);

let SoundcloudLink = ({ url }) => (
  <a href={url}>
    <li><img src="./soundcloud-icon.png" alt="artist-soundcloud" /></li>
  </a>
);

let InstagramLink = ({ url }) => (
  <a href={url}>
    <li><img src="./instagram-icon.png" alt="artist-instagram" /></li>
  </a>
);

export default TrackCard;
