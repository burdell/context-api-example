import React from "react";

import { GifsConsumer } from "../../store/gifs";
import GifList from "./component";

export default () => (
    <GifsConsumer>
        {({ gifs }) => (
            <div>
                {gifs && <GifList gifs={gifs} />}
            </div>
        )}
    </GifsConsumer>
);
