// Round.tsx

import React from "react";

interface RoundProps {
  count: number;
}

const Round: React.FC<RoundProps> = ({ count }) => {
  return (
    <div className="my-round">
      <div className="my-round-title">
        <h3>Round</h3>
      </div>
      <div className="my-round-count">
        <h4>{count}/10</h4>
      </div>
    </div>
  );
};

export default Round;
