import { debounce } from "lodash";
import * as React from "react";

interface Props {
    onSearch(searchTerm: string): void;
}

export default class GifSearch extends React.Component<Props, {}> {
    public onChange = debounce((searchTerm: string) => this.props.onSearch(searchTerm), 300);

    public render() {
        return (
            <div className="gif-search">
                <input onChange={(e) => this.onChange(e.target.value)}/>
            </div>
        );
    }
}
