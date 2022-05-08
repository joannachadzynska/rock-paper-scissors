import { useGameContext } from "constants/gameContext";
import * as React from "react";

import "./Score.scss";

interface ScoreProps {}

const Score: React.FC<ScoreProps> = () => {
    const { score } = useGameContext();

    return (
        <div className='score'>
            <p>Score</p>
            <span className='score__value'>{score}</span>
        </div>
    );
};

export default Score;
