export interface GameContext {
    userChoice: string;
    score: number;
}

export type GameContextType = {
    game: GameContext;
    setGame: React.Dispatch<React.SetStateAction<GameContext>>;
};
