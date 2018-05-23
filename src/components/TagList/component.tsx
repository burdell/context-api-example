import React from "react";

interface Props {
    tags: string[];
    onClick(tag: string): void;
}

export default ({tags, onClick}: Props) => (
    <div>
        {tags.map((tag, i) => (
            <div
                onClick={() => onClick(tag)}
                className="tag"
                key={i}
            >
                {tag}
            </div>
        ))}
    </div>
);
