import React from "react";
import TrackCard from "../TrackCard/TrackCard";
import SwipeableViews from "react-swipeable-views";
import { MatchMediaHOC } from "react-match-media";

class TracksContainer extends React.Component {
  playTrack = ({ id, title, artist, streamURL }) => {
    this.props.playTrack(id, title, artist, streamURL);
  };

  render() {
    const SmallView = () => {
      return (
        <SwipeableViews>
          {this.props.tracks.map(track => {
            return (
              <div key={track.id} className="col-xs-12 col-sm-6 col-md-4">
                <TrackCard
                  isPlaying={
                    this.props.currentTrack.id === track.id &&
                      this.props.isPlaying
                  }
                  key={track.id}
                  id={track.id}
                  artist={track.username}
                  coverArt={track.artwork_url}
                  streamURL={track.stream_url}
                  title={track.title}
                  playTrack={this.playTrack}
                  pauseTrack={this.props.pauseTrack}
                />
              </div>
            );
          })}
        </SwipeableViews>
      );
    };

    const LargeView = () => {
      return (
        <div>
          {this.props.tracks.map(track => {
            return (
              <div key={track.id} className="col-xs-12 col-sm-6 col-md-4">
                <TrackCard
                  isPlaying={
                    this.props.currentTrack.id === track.id &&
                      this.props.isPlaying
                  }
                  key={track.id}
                  id={track.id}
                  artist={track.username}
                  coverArt={track.artwork_url}
                  streamURL={track.stream_url}
                  title={track.title}
                  playTrack={this.playTrack}
                  pauseTrack={this.props.pauseTrack}
                />
              </div>
            );
          })}
        </div>
      );
    };

    const BigScreen = MatchMediaHOC(LargeView, "(min-width: 800px)");
    const SmallScreen = MatchMediaHOC(SmallView, "(max-width: 799px)");

    return (
      <div className="row">
        <BigScreen />
        <SmallScreen />
      </div>
    );
  }
}

export default TracksContainer;
