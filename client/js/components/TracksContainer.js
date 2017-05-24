import React from "react";
import TrackCard from "./TrackCard";
import SwipeableViews from "react-swipeable-views";

class TracksContainer extends React.Component {
  playTrack = (id, title, artist) => {
    this.props.playTrack({ id, title, artist });
  };

  render() {
    return (
      <div className="row">
        <SwipeableViews>
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
                  key={track.id}
                  id={track.id}
                  artist={track.username}
                  coverArt={track.artwork_url}
                  title={track.title}
                  playTrack={this.playTrack}
                  pauseTrack={this.props.pauseTrack}
                />
              </div>
            );
          })}
        </SwipeableViews>
      </div>
    );
  }
}

export default TracksContainer;
