// Round.tsx

import React from "react";

interface RoundProps {
    title: string;
    count: string;
}

const Round: React.FC<RoundProps> = ({ title, count }) => {
    const roundCount = count + "/10";
    return (
        <div className="my-round">
            <div className="my-round-title">
                <h3>{title}</h3>
            </div>
            <div className="my-round-count">
                <h4>{roundCount}</h4>
            </div>
        </div>
    );
};

export default Round;
