import React from "react";

import { GifsConsumer, GifState } from "../../store/gifs";
import GifSearch from "./component";

export default () => (
    <GifsConsumer>
        {({ getGifs, searchTerm }: GifState) => (
            <GifSearch searchTerm={searchTerm} onSearch={getGifs} />
        )}
    </GifsConsumer>
);
