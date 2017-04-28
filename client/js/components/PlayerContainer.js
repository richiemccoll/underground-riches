import React from 'react';

class PlayerContainer extends React.Component {
    render() {
        const playerContainerClass = this.props.isPlaying ? "Player-Container--active" : "Player-Container";

        return (
            <div className={playerContainerClass}>
                <h1>{this.props.track.title}</h1>
            </div>
        )
    }
}

export default PlayerContainer;