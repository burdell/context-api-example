import React from "react";

import "./styles.css";

import { GifsConsumer } from "../../store/gifs";
import GifList from "./component";

export default () => (
    <GifsConsumer>
        {({ gifs, topTags, getGifs }) => (
            <div>
                {gifs && <GifList gifs={gifs} />}
            </div>
        )}
    </GifsConsumer>
);
