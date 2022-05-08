import { GameButton } from "components";
import { useGameContext } from "constants/gameContext";
import { useLocalStorage } from "hooks";
import * as React from "react";
import "./Play.scss";

interface PlayProps {}

const buttons = ["rock", "paper", "scissors"];

const Play: React.FC<PlayProps> = () => {
    const [storedValue] = useLocalStorage("userChoice", "");
    // const [houseChoice, setHouseChoice] = useLocalStorage("houseChoice", "");
    const [houseChoice, setHouseChoice] = React.useState("");

    const setRootProperty = (property: string) => {
        document.documentElement.style.setProperty(
            "--border-color",
            `var(--${property})`
        );
        document.documentElement.style.setProperty(
            "--box-shadow-color",
            `var(--${property}-shadow)`
        );
    };

    const setHouseChoiceProperty = (property: string) => {
        document.documentElement.style.setProperty(
            "--border-house-color",
            `var(--${property})`
        );
        document.documentElement.style.setProperty(
            "--box-shadow-house-color",
            `var(--${property}-shadow)`
        );
    };

    React.useEffect(() => {
        const randomNumber =
            buttons[Math.floor(Math.random() * buttons.length)];
        const timeout = setTimeout(() => {
            setHouseChoice(randomNumber);
            setHouseChoiceProperty(randomNumber);
        }, 3000);
        setRootProperty(storedValue);
        return () => {
            clearTimeout(timeout);
        };
    }, [storedValue]);

    return (
        <div className='play'>
            <div className='user-choice'>
                <GameButton name={storedValue} />
                <p>Your picked</p>
            </div>
            <div className='house-choice'>
                {houseChoice ? (
                    <GameButton name={houseChoice} />
                ) : (
                    <div>null</div>
                )}
                <p>The house picked</p>
            </div>
        </div>
    );
};

export default Play;
