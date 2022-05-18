import * as React from "react";

export type GameContextType = {
    score: number;
    userChoice: string;
    setScore: (score: number) => void;
    setUserChoice: (userChoice: string) => void;
};

export const GameContext = React.createContext<GameContextType | null>(null);

const GameContextProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [userChoice, setUserChoice] = React.useState("");
    const [score, setScore] = React.useState(0);

    return (
        <GameContext.Provider
            value={{ userChoice, score, setUserChoice, setScore }}>
            {children}
        </GameContext.Provider>
    );
};

export const useGameContext = () =>
    React.useContext(GameContext) as GameContextType;

export default GameContextProvider;
