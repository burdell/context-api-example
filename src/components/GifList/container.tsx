import React from "react";

import "./styles.css";

import { GifsConsumer } from "../../store/gifs";
import TagList from "../TagList";
import GifList from "./component";

export default () => (
    <GifsConsumer>
        {({ gifs, topTags, getGifs }) => (
            <div>
                {gifs &&
                    <div>
                        <TagList tags={topTags} onClick={getGifs} />
                        <GifList gifs={gifs} />
                    </div>
                }
            </div>
        )}
    </GifsConsumer>
);
