import React from "react";
import { CLIENT_ID } from "../../../constants/constants";

class PlayerContainer extends React.Component {
  render() {
    const playerContainerClass = this.props.isPlaying
      ? "Player-Container--active"
      : "Player-Container";
    let url;

    if (this.props.track.streamURL) {
      url = `${this.props.track.streamURL}?client_id=${CLIENT_ID}`;
    }

    const Audio = ({ url }) => {
      return (
        <audio
          src={url}
          autoPlay
          controls
        >
          Your browser does not support the <code>audio</code> element.
        </audio>
      );
    };

    return (
      <div className={playerContainerClass}>
        <h1>{this.props.track.title}</h1>
        <div className="Audio">
         <Audio url={url} />
        </div>
      </div>
    );
  }
}

export default PlayerContainer;
