import React from "react";
import Nav from "./Nav";
import TracksContainer from "./TracksContainer";
import PlayerContainer from "./PlayerContainer";
import { tracks } from "./TrackData";

class App extends React.Component {
  state = {
    tracks: [],
    isPlaying: false,
    isPaused: false,
    currentTrack: {}
  };

  componentDidMount() {
    this.setState({ tracks: tracks });
  }

  playTrack = currentTrack => {
    this.setState({ isPlaying: true, currentTrack: currentTrack });
  };

  pauseTrack = () => {
    this.setState({ isPaused: true, isPlaying: false });
  };

  render() {
    return (
      <div className="container">
        <Nav />
        <main>
          <TracksContainer
            currentTrack={this.state.currentTrack}
            isPlaying={this.state.isPlaying}
            playTrack={this.playTrack}
            pauseTrack={this.pauseTrack}
            tracks={this.state.tracks}
          />
        

          <PlayerContainer
            isPlaying={this.state.isPlaying}
            track={this.state.currentTrack}
          />
          
          </main>
        <footer />
      </div>
    );
  }
}

export default App;
