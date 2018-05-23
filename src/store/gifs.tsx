import { flatten, invertBy, values } from "lodash";
import React, { Component } from "react";

import { searchGifs } from "../api";

export interface Gif {
    title: string;
    gfyId: string;
    gif100px: string;
    gifUrl: string;
    max1mbGif: string;
    max2mbGif: string;
    max5mbGif: string;
    tags: string[] | null;
}

export interface GifState {
    gifs: Gif[] | null;
    topTags: string[];
    searchTerm: string;
    getGifs(searchTerm: string): void;
}

const Context = React.createContext<GifState>({} as any);

class GifsProvider extends Component<{}, GifState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            getGifs: this.getGifs,
            gifs: null,
            searchTerm: "",
            topTags: []
        };
    }

    public render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }

    public getGifs = async (searchTerm: string) => {
        const result = await searchGifs(searchTerm);

        const gifs = result.gfycats;
        const topTags = this.generateTags(gifs);
        this.setState({ gifs, topTags, searchTerm });
    }

    public generateTags(gifs: Gif[]) {
        const tags: { [tagName: string]: number } = {};
        gifs.reduce((acc, gif) => {
            if (!gif.tags) { return acc; }

            gif.tags.forEach((tag) => {
                if (!acc[tag]) {
                    acc[tag] = 0;
                }
                acc[tag] = acc[tag] + 1;
            });

            return acc;
        }, tags);

        const invertedTags = invertBy(tags);
        const topTags = flatten(values(invertedTags));
        return topTags.slice(Math.max(topTags.length - 10, 1)).reverse();
    }
}

const GifsConsumer = Context.Consumer;

export { GifsProvider, GifsConsumer };
