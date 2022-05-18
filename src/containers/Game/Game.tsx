import * as React from "react";
import { GameButton } from "../../components";
import triangle from "../../assets/images/bg/bg-triangle.svg";

import "./Game.scss";
import { useGameContext } from "constants/gameContext";
import { useLocalStorage } from "hooks";

interface GameProps {}

const buttons = [
    {
        name: "paper",
    },
    {
        name: "rock",
    },
    {
        name: "scissors",
    },
];

const Game: React.FC<GameProps> = () => {
    const { setUserChoice } = useGameContext();
    const [setValue] = useLocalStorage("userChoice", "");

    const setChoice = (choice: string) => {
        setUserChoice(choice);
        setValue(choice);
    };
    return (
        <div className='game'>
            <div className='game-img'>
                <img src={triangle} alt='triangle' />

                <div className='buttons-container'>
                    {buttons.map((button, i) => (
                        <GameButton
                            onClick={() => setChoice(button.name)}
                            key={button.name + i}
                            name={button.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Game;
