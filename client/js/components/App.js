import React from "react";
import Nav from "./Nav";
import TrackCard from "./TrackCard";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <main>
          <div className="row">
            <div className="col-xs-12 col-md-4">
                <TrackCard />
            </div>
          </div>
        </main>
        <footer>
            Underground Riches
        </footer>
      </div>
    );
  }
}

export default App;


