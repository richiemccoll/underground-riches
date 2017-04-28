import React from "react";
import TrackCard from "./TrackCard";

class TracksContainer extends React.Component {
  playTrack = (id, title, artist) => {
    this.props.playTrack({ id, title, artist });
  };

  render() {
    return (
      <div className="row">
        {this.props.tracks.map(track => {
          return (
            <div key={track.id} className="col-xs-12 col-sm-6 col-md-4">
              <TrackCard
                isPlaying={
                  this.props.currentTrack.id === track.id &&
                    this.props.isPlaying
                    ? true
                    : false
                }
                id={track.id}
                artist={track.artist}
                coverArt={track.coverArt}
                title={track.title}
                artistFacebook={track.artistFacebook}
                artistInstagram={track.artistInstagram}
                artistTwitter={track.artistTwitter}
                artistSoundcloud={track.artistSoundcloud}
                playTrack={this.playTrack}
                pauseTrack={this.props.pauseTrack}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default TracksContainer;
