import React from "react";
import Nav from './Nav/Nav';
import TracksContainer from "./TracksContainer/TracksContainer";
import PlayerContainer from "./Player/PlayerContainer";
import fetchSoundcloud from "../API";
import Loading from "./Loading/Loading";

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

  playTrack = (id, title, artist, streamURL) => {
    const newState = Object.assign({}, { id, title, artist, streamURL });
    this.setState({ isPlaying: true, currentTrack: newState });
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
            ? <Loading />
            : <TracksContainer
                currentTrack={this.state.currentTrack}
                isPlaying={this.state.isPlaying}
                playTrack={this.playTrack}
                pauseTrack={this.pauseTrack}
                tracks={this.state.tracks}
                isPlaying={this.state.isPlaying}
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
