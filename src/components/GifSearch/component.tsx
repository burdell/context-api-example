import { debounce } from "lodash";
import * as React from "react";

import "./styles.css";

interface Props {
    searchTerm: string;
    onSearch(searchTerm: string): void;
}

export default class GifSearch extends React.Component<Props, {}> {
    public onChange = debounce((searchTerm: string) => this.props.onSearch(searchTerm), 500);

    public render() {
        return (
            <div className="gif-search">
                <input onChange={(e) => this.onChange(e.target.value)}/>
            </div>
        );
    }
}
