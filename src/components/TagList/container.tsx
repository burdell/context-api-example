import React from "react";

import { GifsConsumer } from "../../store/gifs";
import TagList from "./component";

export default () => (
    <GifsConsumer>
        {({ topTags, getGifs }) => (
            <div>
                {topTags && <TagList tags={topTags} onClick={getGifs} />}
            </div>
        )}
    </GifsConsumer>
);
