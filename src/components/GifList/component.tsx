import React from "react";

import { Gif as GifType } from "../../store/gifs";

interface Props {
    gifs: GifType[];
}

export default ({ gifs }: Props) => (
    <div className="gif-list-container">
        <div className="gif-list">
            {gifs.map((gif) => (
                 <div className="gif">
                    <img src={gif.max1mbGif} />
                    <div>{gif.title}</div>
                </div>
            ))}
        </div>
    </div>
);
