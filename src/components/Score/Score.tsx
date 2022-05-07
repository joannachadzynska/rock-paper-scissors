import * as React from "react";

import "./Score.scss";

interface ScoreProps {
    score?: number;
}

const Score: React.FC<ScoreProps> = ({ score = 12 }) => {
    return (
        <div className='score'>
            <p>Score</p>
            <span className='score__value'>{score}</span>
        </div>
    );
};

export default Score;
