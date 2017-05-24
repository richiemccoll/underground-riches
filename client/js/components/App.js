import React from "react";
import Nav from "./Nav";
import TracksContainer from "./TracksContainer";
import PlayerContainer from "./PlayerContainer";
import fetchSoundcloud from "./TrackData";

class App extends React.Component {
  state = {
    tracks: [],
    loading: true,
    isPlaying: false,
    isPaused: false,
    currentTrack: {}
  };

  componentDidMount() {
    let tracks = fetchSoundcloud();
    tracks.then(i => this.setState({ tracks: i, loading: false }));
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
          {this.state.loading
            ? <h1>loading</h1>
            : <TracksContainer
                currentTrack={this.state.currentTrack}
                isPlaying={this.state.isPlaying}
                playTrack={this.playTrack}
                pauseTrack={this.pauseTrack}
                tracks={this.state.tracks}
              />}

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
