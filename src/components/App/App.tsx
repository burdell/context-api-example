import * as React from "react";
import "./App.css";

import { GifsProvider } from "../../store/gifs";
import GifList from "../GifList";
import GifSearch from "../GifSearch";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <GifsProvider>
          <GifSearch />
          <GifList />
        </GifsProvider>
      </div>
    );
  }
}

export default App;
