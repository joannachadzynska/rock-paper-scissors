import { Button, GameButton } from "components";
import { useGameContext } from "constants/gameContext";
import { useLocalStorage } from "hooks";
import * as React from "react";
import { Link } from "react-router-dom";
import "./Play.scss";

interface PlayProps {}

const buttons = ["rock", "paper", "scissors"];

enum Result {
    YOU_WIN = "you win",
    YOU_LOOSE = "you loose",
    DRAW = "draw",
}

enum Choice {
    ROCK = "rock",
    PAPER = "paper",
    SCISSORS = "scissors",
}

const Play: React.FC<PlayProps> = () => {
    const [storedValue] = useLocalStorage("userChoice", "");
    const { score, setScore } = useGameContext();
    const [houseChoice, setHouseChoice] = React.useState("");
    const [counter, setCounter] = React.useState(3);
    const [result, setResult] = React.useState("");

    React.useEffect(() => {
        setHouseChoiceData();
    }, []);

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

    const setBgProperty = (bg: string) => {
        document.documentElement.style.setProperty("--button-bg", bg);
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

    const setHouseChoiceData = () => {
        const randomNumber =
            buttons[Math.floor(Math.random() * buttons.length)];
        setHouseChoice(randomNumber);
    };

    const checkResult = (houseChoice: string) => {
        let result = "";
        if (storedValue === houseChoice) {
            result = Result.DRAW;
        }

        if (
            (storedValue === Choice.ROCK && houseChoice === Choice.SCISSORS) ||
            (storedValue === Choice.PAPER && houseChoice === Choice.ROCK) ||
            (storedValue === Choice.SCISSORS && houseChoice === Choice.PAPER)
        ) {
            result = Result.YOU_WIN;
            setScore(score + 1);
        }

        if (
            (storedValue === Choice.ROCK && houseChoice === Choice.PAPER) ||
            (storedValue === Choice.PAPER && houseChoice === Choice.SCISSORS) ||
            (storedValue === Choice.SCISSORS && houseChoice === Choice.ROCK)
        ) {
            result = Result.YOU_LOOSE;
            setScore(score - 1);
        }

        setResult(result);
    };

    React.useEffect(() => {
        setBgProperty("hsl(237deg, 49%, 20%)");
        setRootProperty(storedValue);

        const timeout = setInterval(() => {
            if (counter > 0) {
                setCounter(counter - 1);
            } else {
                setBgProperty("#fff");
                setHouseChoiceProperty(houseChoice);
                checkResult(houseChoice);
                clearInterval(timeout);
            }
        }, 1000);

        return () => {
            clearInterval(timeout);
            setHouseChoiceProperty("blank");
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [storedValue, counter, houseChoice]);

    return (
        <div className='play-container'>
            <div className='play'>
                <div
                    className={
                        houseChoice && result === Result.YOU_WIN
                            ? "user-choice btn win"
                            : "user-choice btn"
                    }>
                    <GameButton name={storedValue} />
                    <p className='choice'>You picked</p>
                </div>
                <div
                    className={
                        houseChoice && result === Result.YOU_LOOSE
                            ? "house-choice btn win"
                            : "house-choice btn"
                    }>
                    {result && counter <= 0 ? (
                        <GameButton name={houseChoice} />
                    ) : (
                        <GameButton name='blank'>
                            <p className='counter'>{counter}</p>
                        </GameButton>
                    )}

                    <p className='choice'>The house picked</p>
                </div>
                {houseChoice && result && (
                    <div className='result'>
                        <h2 className='result-text'>{result}</h2>
                        <Link to='/'>
                            <Button role='play'>Play again</Button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Play;
