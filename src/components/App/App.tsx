import * as React from "react";
import "./App.css";

import { GifsProvider } from "../../store/gifs";
import GifList from "../GifList";
import GifSearch from "../GifSearch";
import TagList from "../TagList";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <GifsProvider>
          <GifSearch />
          <TagList />
          <GifList />
        </GifsProvider>
      </div>
    );
  }
}

export default App;
