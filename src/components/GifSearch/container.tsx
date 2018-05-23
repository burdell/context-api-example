import React from "react";

import { GifsConsumer } from "../../store/gifs";
import GifSearch from "./component";

export default () => (
    <GifsConsumer>
        {({ getGifs }) => (
            <GifSearch onSearch={getGifs} />
        )}
    </GifsConsumer>
);
